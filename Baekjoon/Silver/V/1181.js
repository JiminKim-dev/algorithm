// 단어 정렬
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();
  const setArr = new Set(arr)
  return [...setArr].sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length).join('\n')
}

console.log(solution(input));