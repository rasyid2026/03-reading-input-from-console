const readline = require("readline-sync");
const number1 = readline.question('enter first number: ');
const number2 = readline.question('enter second number: ');
const question1 = readline.question ('what is ' + number1 + ' + ' + number2 + '? ');
const result = +(number1 + number2);

console.log(number1 + ' + ' + number2 + ' = ' + question1 + ' is ' + true || false);
