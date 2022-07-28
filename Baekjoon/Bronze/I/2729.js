// 이진수 덧셈
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();
  return arr.map(el => {
    const [A, B] = el.split(' ');
    return (BigInt("0b" + A) + BigInt("0b" + B)).toString(2)

  }).join('\n')
}

console.log(solution(input));