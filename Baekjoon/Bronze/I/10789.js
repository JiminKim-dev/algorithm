// 세로읽기
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const newArr = arr.map(el => el.split(''));
  const maxLength = Math.max(...newArr.map(el => el.length));

  let result = '';

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < newArr.length; j++) {
      result += newArr[j][i] || '';
    }
  }

  return result
}

console.log(solution(input));