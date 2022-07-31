// 점수 집계
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();

  return arr.map(el => {
    const totalScore = el.split(' ').map(Number).sort((a, b) => a - b);

    totalScore.pop();
    totalScore.shift();

    const min = totalScore[0];
    const max = totalScore[totalScore.length -1];

    return max - min >= 4 ? 'KIN': totalScore.reduce((prev, curr) => prev + curr);
  })
  .join('\n')
}

console.log(solution(input));