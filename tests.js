// Linear extrapolation using recent points
function linearExtrapolation(times, values, finalTime, windowSize = null) {
    if (times.length < 2) {
        return values.length > 0 ? values[values.length - 1] : 0;
    }

    const n = windowSize ? Math.min(windowSize, times.length) : times.length;
    const t = times.slice(-n);
    const v = values.slice(-n);

    // Calculate means
    const tMean = t.reduce((sum, val) => sum + val, 0) / t.length;
    const vMean = v.reduce((sum, val) => sum + val, 0) / v.length;

    // Calculate slope
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < t.length; i++) {
        numerator += (t[i] - tMean) * (v[i] - vMean);
        denominator += (t[i] - tMean) ** 2;
    }

    if (denominator === 0) return vMean;

    const slope = numerator / denominator;
    const intercept = vMean - slope * tMean;

    return slope * finalTime + intercept;
}

function weightedLinearRegression(x, y, weights, targetX) {
    let sumW = 0, sumWX = 0, sumWY = 0, sumWXY = 0, sumWX2 = 0;

    for (let i = 0; i < x.length; i++) {
        const w = weights[i];
        sumW += w;
        sumWX += w * x[i];
        sumWY += w * y[i];
        sumWXY += w * x[i] * y[i];
        sumWX2 += w * x[i] * x[i];
    }

    const denominator = sumW * sumWX2 - sumWX * sumWX;
    if (Math.abs(denominator) < 1e-10) {
        return sumWY / sumW; // Return weighted mean if no slope can be determined
    }

    const slope = (sumW * sumWXY - sumWX * sumWY) / denominator;
    const intercept = (sumWY - slope * sumWX) / sumW;

    return slope * targetX + intercept;
}

// Local linear extrapolation (LOESS-style)
function localLinearExtrapolation(times, values, finalTime, bandwidth = 0.3) {
    if (times.length < 3) {
        return linearExtrapolation(times, values, finalTime);
    }

    const recentTime = times[times.length - 1];
    const timeRange = times[times.length - 1] - times[0];
    const window = bandwidth * timeRange;

    // Select points within the window
    const localIndices = [];
    for (let i = 0; i < times.length; i++) {
        if (times[i] >= recentTime - window) {
            localIndices.push(i);
        }
    }

    if (localIndices.length < 2) {
        return linearExtrapolation(times, values, finalTime);
    }

    const tLocal = localIndices.map(i => times[i]);
    const vLocal = localIndices.map(i => values[i]);

    // Apply distance weights (closer points get higher weights)
    const weights = tLocal.map(t => Math.exp(-Math.abs(t - recentTime) / (window / 3)));

    return weightedLinearRegression(tLocal, vLocal, weights, finalTime);
}

times = [0, 1, 2, 3, 4, 5]
values = [3, 2, 5, 4, 6, 7]

finalValue = linearExtrapolation(times, values, 20)
console.log("linear:", finalValue);
finalValue = localLinearExtrapolation(times, values, 20)
console.log("local linear:", finalValue);
