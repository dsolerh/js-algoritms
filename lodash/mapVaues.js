const _ = require("lodash");

// const bots = [
//     { league: 0, id: "1" },
//     { league: 0, id: "2" },
//     { league: 0, id: "3" },
//     { league: 1, id: "1" },
//     { league: 1, id: "2" },
//     { league: 1, id: "3" },
// ]
// const botsByLeague = _.groupBy(bots, (b) => b.league);
// console.log(botsByLeague);

// const botsMap = _.mapValues(
//     botsByLeague,
//     (bots, k) => _.keyBy(bots, (b) => b.id)
// );

// console.log("JSON.parse(null):", JSON.parse(null));

// console.log(botsMap);
// console.log(_.some([5, 0], (t) => t > 0));
// console.log([][1]);

// const total = 100;
// const maxPerBucket = 30;
// const groupingSize = 2;
// console.log("total: ", total);
// console.log("max per bucket: ", maxPerBucket);
// console.log("group size: ", groupingSize);

// const numBuckets = Math.max(1, Math.floor(100 / 30));
// const maxRank = numBuckets * maxPerBucket;
// const nonSplittedGroupsInSegment = Math.floor(maxPerBucket / groupingSize) * groupingSize;
// const threshold = nonSplittedGroupsInSegment * numBuckets;
// console.log("num of bucket: ", numBuckets);
// console.log("max rank: ", maxRank);
// console.log("non splitted groups: ", nonSplittedGroupsInSegment);
// console.log("threshold: ", threshold);

console.log('maxBy: ', _.maxBy([{ a: 1, b: 0 }, { a: 1, b: 10 }], ["a", "b"]));
