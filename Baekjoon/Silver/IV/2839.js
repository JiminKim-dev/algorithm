// 설탕 배달
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim()

function solution(num) {
  let sugar = Number(num);
  let count = 0;

  while (sugar > 0) {
    sugar % 5 === 0 ? sugar -= 5 : sugar -= 3;
    count++;
  }

  return sugar === 0 ? count : -1 ;
}

console.log(solution(input));