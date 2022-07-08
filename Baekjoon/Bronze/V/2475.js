const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(num) {
  return num
  .map(el => Math.pow(Number(el), 2))
  .reduce((acc, cur) => acc + cur) % 10;
}

console.log(solution(input));