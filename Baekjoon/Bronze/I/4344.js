// 평균은 넘겠지
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution (arr) {
  arr.shift();

  return arr
  .map(el => {
    const grades = el.split(' ').map(Number);
    const [N, ...grade] = grades

    const avg = grade.reduce((prev, curr) => prev + curr, 0) / N
    const ratio = (grade.filter(el => el > avg).length / N * 100).toFixed(3)

    return `${ratio}%`
  })
  .join('\n') 
}

console.log(solution(input));