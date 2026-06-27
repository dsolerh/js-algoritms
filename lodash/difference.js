const _ = require("lodash");

const diceRewards = undefined
const step = undefined
// {
//     diceRewards: ["A","B"]
// }

const dices = ["A", "B"]

const diceToGive = diceRewards ?? step?.diceRewards ?? [];
const [diff] = _.difference(diceRewards ?? step?.diceRewards ?? [], dices)

console.log("Dice to give: ", diceToGive);
console.log("Dice owned: ", dices);
console.log("Difference: ", diff);
