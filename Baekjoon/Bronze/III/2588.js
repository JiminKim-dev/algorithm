// 곱셈
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num1 = Number(input[0]);
const num2 = input[1];
const [hundredNum2, tenNum2, oneNum2] = num2.split('');

console.log(num1 * Number(oneNum2));
console.log(num1 * Number(tenNum2));
console.log(num1 * Number(hundredNum2));
console.log(num1 * num2);