class NonParametricExtrapolator {
    constructor(finalTime) {
        this.finalTime = finalTime;
        this.times = [];
        this.values = [];
        this.history = [];
    }

    // Add a new data point and update predictions
    addDataPoint(time, value) {
        this.times.push(time);
        this.values.push(value);

        if (this.times.length >= 2) {
            const predictions = this.predictFinalValue();
            this.history.push({
                currentTime: time,
                currentValue: value,
                predictions: { ...predictions }
            });
        }
    }

    // Linear extrapolation using recent points
    linearExtrapolation(windowSize = null) {
        if (this.times.length < 2) {
            return this.values.length > 0 ? this.values[this.values.length - 1] : 0;
        }

        const n = windowSize ? Math.min(windowSize, this.times.length) : this.times.length;
        const t = this.times.slice(-n);
        const v = this.values.slice(-n);

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

        return slope * this.finalTime + intercept;
    }

    // Polynomial extrapolation
    polynomialExtrapolation(degree = 2, windowSize = null) {
        if (this.times.length < degree + 1) {
            return this.linearExtrapolation(windowSize);
        }

        const n = windowSize ? Math.min(windowSize, this.times.length) : this.times.length;
        const t = this.times.slice(-n);
        const v = this.values.slice(-n);

        // Vandermonde matrix approach for polynomial fitting
        const coeffs = this.polyfit(t, v, degree);
        return this.polyval(coeffs, this.finalTime);
    }

    // Helper function for polynomial fitting (least squares)
    polyfit(x, y, degree) {
        const n = x.length;
        const A = [];
        const b = [...y];

        // Build Vandermonde matrix
        for (let i = 0; i < n; i++) {
            A[i] = [];
            for (let j = 0; j <= degree; j++) {
                A[i][j] = Math.pow(x[i], j);
            }
        }

        // Solve normal equations: A^T * A * coeffs = A^T * b
        const AT = this.transpose(A);
        const ATA = this.matrixMultiply(AT, A);
        const ATb = this.matrixVectorMultiply(AT, b);

        return this.solveLinearSystem(ATA, ATb);
    }

    // Helper function to evaluate polynomial
    polyval(coeffs, x) {
        let result = 0;
        for (let i = 0; i < coeffs.length; i++) {
            result += coeffs[i] * Math.pow(x, i);
        }
        return result;
    }

    // Spline-like extrapolation using cubic interpolation
    splineExtrapolation(windowSize = null) {
        if (this.times.length < 3) {
            return this.linearExtrapolation(windowSize);
        }

        // Use cubic polynomial for smooth extrapolation
        return this.polynomialExtrapolation(3, windowSize);
    }

    // Local linear extrapolation (LOESS-style)
    localLinearExtrapolation(bandwidth = 0.3) {
        if (this.times.length < 3) {
            return this.linearExtrapolation();
        }

        const recentTime = this.times[this.times.length - 1];
        const timeRange = this.times[this.times.length - 1] - this.times[0];
        const window = bandwidth * timeRange;

        // Select points within the window
        const localIndices = [];
        for (let i = 0; i < this.times.length; i++) {
            if (this.times[i] >= recentTime - window) {
                localIndices.push(i);
            }
        }

        if (localIndices.length < 2) {
            return this.linearExtrapolation();
        }

        const tLocal = localIndices.map(i => this.times[i]);
        const vLocal = localIndices.map(i => this.values[i]);

        // Apply distance weights (closer points get higher weights)
        const weights = tLocal.map(t => Math.exp(-Math.abs(t - recentTime) / (window / 3)));

        return this.weightedLinearRegression(tLocal, vLocal, weights, this.finalTime);
    }

    // Weighted linear regression
    weightedLinearRegression(x, y, weights, targetX) {
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

    // Trend-based extrapolation
    trendBasedExtrapolation(trendWindow = 3) {
        if (this.times.length < trendWindow + 1) {
            return this.linearExtrapolation();
        }

        const recentTimes = this.times.slice(-(trendWindow + 1));
        const recentValues = this.values.slice(-(trendWindow + 1));

        // Calculate trends (rates of change)
        const trends = [];
        for (let i = 1; i < recentTimes.length; i++) {
            const timeDiff = recentTimes[i] - recentTimes[i - 1];
            const valueDiff = recentValues[i] - recentValues[i - 1];
            if (timeDiff > 0) {
                trends.push(valueDiff / timeDiff);
            }
        }

        if (trends.length === 0) {
            return this.values[this.values.length - 1];
        }

        // Weighted average of trends (more weight to recent)
        let weightedSum = 0;
        let totalWeight = 0;
        for (let i = 0; i < trends.length; i++) {
            const weight = Math.exp(i - trends.length + 1); // Exponential weighting
            weightedSum += trends[i] * weight;
            totalWeight += weight;
        }

        const avgTrend = weightedSum / totalWeight;
        const timeToFinal = this.finalTime - this.times[this.times.length - 1];

        return this.values[this.values.length - 1] + avgTrend * timeToFinal;
    }

    // Ensemble prediction combining multiple methods
    ensemblePrediction(weights = null) {
        const methods = [
            () => this.linearExtrapolation(5),
            () => this.polynomialExtrapolation(2, 7),
            () => this.splineExtrapolation(10),
            () => this.localLinearExtrapolation(0.3),
            () => this.trendBasedExtrapolation(3)
        ];

        const predictions = [];
        for (const method of methods) {
            try {
                const pred = method();
                if (isFinite(pred)) {
                    predictions.push(pred);
                }
            } catch (e) {
                // Skip failed predictions
                continue;
            }
        }

        if (predictions.length === 0) {
            return this.values.length > 0 ? this.values[this.values.length - 1] : 0;
        }

        // Equal weights if not specified
        if (!weights) {
            weights = new Array(predictions.length).fill(1 / predictions.length);
        }

        let weightedSum = 0;
        let totalWeight = 0;
        for (let i = 0; i < predictions.length && i < weights.length; i++) {
            weightedSum += predictions[i] * weights[i];
            totalWeight += weights[i];
        }

        return weightedSum / totalWeight;
    }

    // Get predictions from all methods
    predictFinalValue() {
        if (this.times.length < 1) {
            return {};
        }

        const predictions = {};
        const fallback = this.values.length > 0 ? this.values[this.values.length - 1] : 0;

        try {
            predictions.linear = this.linearExtrapolation(5);
        } catch (e) {
            predictions.linear = fallback;
        }

        try {
            predictions.polynomial = this.polynomialExtrapolation(2, 7);
        } catch (e) {
            predictions.polynomial = fallback;
        }

        try {
            predictions.spline = this.splineExtrapolation(10);
        } catch (e) {
            predictions.spline = fallback;
        }

        try {
            predictions.localLinear = this.localLinearExtrapolation(0.3);
        } catch (e) {
            predictions.localLinear = fallback;
        }

        try {
            predictions.trendBased = this.trendBasedExtrapolation(3);
        } catch (e) {
            predictions.trendBased = fallback;
        }

        try {
            predictions.ensemble = this.ensemblePrediction();
        } catch (e) {
            predictions.ensemble = fallback;
        }

        return predictions;
    }

    // Get confidence intervals for predictions (simple approach)
    getPredictionConfidence() {
        if (this.history.length < 3) {
            return { mean: 0, std: 0, lower: 0, upper: 0 };
        }

        // Calculate prediction variance from history
        const recentPredictions = this.history.slice(-5).map(h => h.predictions.ensemble);
        const mean = recentPredictions.reduce((sum, val) => sum + val, 0) / recentPredictions.length;
        const variance = recentPredictions.reduce((sum, val) => sum + (val - mean) ** 2, 0) / recentPredictions.length;
        const std = Math.sqrt(variance);

        const currentPrediction = this.predictFinalValue().ensemble;

        return {
            mean: currentPrediction,
            std: std,
            lower: currentPrediction - 1.96 * std, // 95% confidence interval
            upper: currentPrediction + 1.96 * std
        };
    }

    // Matrix operations helpers
    transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    matrixMultiply(A, B) {
        const result = [];
        for (let i = 0; i < A.length; i++) {
            result[i] = [];
            for (let j = 0; j < B[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < B.length; k++) {
                    sum += A[i][k] * B[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    matrixVectorMultiply(A, b) {
        const result = [];
        for (let i = 0; i < A.length; i++) {
            let sum = 0;
            for (let j = 0; j < A[i].length; j++) {
                sum += A[i][j] * b[j];
            }
            result[i] = sum;
        }
        return result;
    }

    // Simple Gaussian elimination for solving linear systems
    solveLinearSystem(A, b) {
        const n = A.length;
        const augmented = A.map((row, i) => [...row, b[i]]);

        // Forward elimination
        for (let i = 0; i < n; i++) {
            // Find pivot
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(augmented[k][i]) > Math.abs(augmented[maxRow][i])) {
                    maxRow = k;
                }
            }
            [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];

            // Make all rows below this one 0 in current column
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(augmented[i][i]) < 1e-10) continue;
                const c = augmented[k][i] / augmented[i][i];
                for (let j = i; j <= n; j++) {
                    augmented[k][j] -= c * augmented[i][j];
                }
            }
        }

        // Back substitution
        const x = new Array(n);
        for (let i = n - 1; i >= 0; i--) {
            x[i] = augmented[i][n];
            for (let j = i + 1; j < n; j++) {
                x[i] -= augmented[i][j] * x[j];
            }
            if (Math.abs(augmented[i][i]) > 1e-10) {
                x[i] /= augmented[i][i];
            }
        }

        return x;
    }

    // Export current state
    exportState() {
        return {
            finalTime: this.finalTime,
            times: [...this.times],
            values: [...this.values],
            history: this.history.map(h => ({ ...h })),
            currentPredictions: this.predictFinalValue(),
            confidence: this.getPredictionConfidence()
        };
    }
}

// Example usage and testing
function exampleUsage() {
    console.log("=== Non-Parametric Extrapolation Example ===");

    // Create extrapolator that should reach final time = 10
    const extrapolator = new NonParametricExtrapolator(10);

    // Simulate a function: f(t) = 5 + 2*t + 0.1*t^2 + noise
    const trueFunction = (t) => 5 + 2 * t + 0.1 * t * t;

    console.log("Adding data points and showing predictions:");
    console.log("Time | Value | Linear | Polynomial | Ensemble | True@10");
    console.log("-".repeat(60));

    for (let t = 1; t <= 8; t += 0.5) {
        const noise = (Math.random() - 0.5) * 0.5; // Small random noise
        const value = trueFunction(t) + noise;

        extrapolator.addDataPoint(t, value);

        if (t >= 2) { // Show predictions after we have enough data
            const predictions = extrapolator.predictFinalValue();
            const trueValue = trueFunction(10);

            console.log(
                `${t.toFixed(1)}  | ${value.toFixed(2)}  | ${predictions.linear.toFixed(2)}    | ${predictions.polynomial.toFixed(2)}       | ${predictions.ensemble.toFixed(2)}     | ${trueValue.toFixed(2)}`
            );
        }
    }

    // Show final state
    const finalState = extrapolator.exportState();
    console.log("\n=== Final Predictions ===");
    console.log("Method          | Prediction");
    console.log("-".repeat(30));
    Object.entries(finalState.currentPredictions).forEach(([method, value]) => {
        console.log(`${method.padEnd(15)} | ${value.toFixed(3)}`);
    });

    console.log(`\nTrue final value: ${trueFunction(10).toFixed(3)}`);

    const confidence = finalState.confidence;
    console.log(`\nConfidence Interval (95%): [${confidence.lower.toFixed(3)}, ${confidence.upper.toFixed(3)}]`);

    return extrapolator;
}

// Run example
const example = exampleUsage();