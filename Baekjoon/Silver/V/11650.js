// 좌표 정렬하기
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();
  return arr.map(el => el.split(' ').map(Number)).sort((a,b)=> a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]).map(el => el.join(' ')).join('\n')
}

console.log(solution(input));