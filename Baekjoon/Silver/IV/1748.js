// 수 이어 쓰기 1
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(num) {
  let count = 0;

  for (let i = 1; i <= num; i *= 10) {
    count += num - i + 1
  }

  return count;
}

console.log(solution(+input));


// 메모리 초과
// function solution2(num) {
//   return Array.from({length: +num}, (el, i) => i + 1).join('').length;
// }

// console.log(solution2(input));