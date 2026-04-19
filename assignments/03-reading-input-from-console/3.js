const aing = require("readline-sync");
const number1 = aing.question('Enter second: ');
let result1 = parseInt(number1 / 60);
let remainder = (number1 % 60);

console.log(number1 + ' second is ' + result1 + ' minutes and ' + remainder + ' second ');