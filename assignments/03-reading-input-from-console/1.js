const aing = require("readline-sync");
const number1 = +aing.question('Input first number: ');
const number2 = +aing.question('input second number: ');
const number3 = +aing.question('input third number: ');
const result = +(number1 + number2 + number3)/3;

console.log('The averange of ' + number1, + number2,  + number3,  'is ' + result);