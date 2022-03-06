const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    const num = calcScore(arr[i]);
    result.push(num);
  }

  return result.join('\n')
}

function calcScore(str) {
  let counter = 0;
  return str
  .split('')
  .map(el => {
    el === 'X' ? counter = 0 : counter++;
    return counter;
  })
  .reduce((acc, cur) => acc + cur);
}

console.log(solution(input));