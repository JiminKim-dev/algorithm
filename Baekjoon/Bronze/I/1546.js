// 평균
const fs = require('fs'); 
const [_, grades] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(str) { 
  const grade = str.split(' ').map(Number);
  const MaxGrade = Math.max(...grade);

  return grade.map(el => el / MaxGrade * 100).reduce((prev, curr) => prev + curr) / grade.length
}

console.log(solution(grades));