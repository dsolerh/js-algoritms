const _ = require("lodash");

const bots = [
    { league: 0, id: "1" },
    { league: 0, id: "2" },
    { league: 0, id: "3" },
    { league: 1, id: "4" },
    { league: 1, id: "5" },
    { league: 1, id: "6" },
]

const botsMap = _.keyBy(bots, (b) => b.id);
const st = new Set(_.map(bots, "id"))

console.log(botsMap);
console.log(st);
