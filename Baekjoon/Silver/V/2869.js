// 달팽이는 올라가고 싶다.
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(el => Number(el));

function solution(arr) {
  const [A, B, V] = arr;
  return Math.ceil((V - B) / (A - B))
}
console.log(solution(input));