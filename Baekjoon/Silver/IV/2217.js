// 로프
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(arr) {
  const [N, ...ropes] = arr
  const sortRopes = ropes.sort((a, b) => a - b);
  const weights = sortRopes.map((el, index) => el * (N - index));
  return Math.max(...weights);
}

console.log(solution(input));