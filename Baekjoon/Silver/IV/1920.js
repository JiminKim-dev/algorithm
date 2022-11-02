// 수 찾기
const fs = require('fs'); 
const [N, A, M, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(a,b) {
  const splitA = new Set(a.split(' '));
  const splitB = b.split(' ');

  const result = splitB.map(el => splitA.has(el) ? 1 : 0);
  return result.join('\n')
}

console.log(solution(A, B));