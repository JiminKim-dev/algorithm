// 팰린드롬수
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.pop();
  return arr.map(el => Number(el) === Number(el.split('').reverse().join('')) ? 'yes' : 'no').join('\n')
}

console.log(solution(input));