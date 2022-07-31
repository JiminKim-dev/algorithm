// 콘테스트
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(arr) {
  const W = arr.slice(0, 10).sort((a, b) => b - a).slice(0,3).reduce((prev, curr) => prev + curr);
  const K = arr.slice(10).sort((a, b) => b - a).slice(0,3).reduce((prev, curr) => prev + curr);
  return [W, K].join(' ');
}

console.log(solution(input));