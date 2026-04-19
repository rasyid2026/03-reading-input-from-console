const aing = require("readline-sync");
const number1 = +aing.question('enter miles: ');
const result = +(number1 * 1.60934);

console.log(number1 + ' miles is equal to ' + result + ' kilometers ');