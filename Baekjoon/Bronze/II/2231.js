// 분해합
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim();

// 27876KB	488ms 다시풀어보기 🥲
function solution(num) {
  const N = (number) => String(number).split('').reduce((prev, curr) => Number(prev) + Number(curr), Number(number));

  const M = Number(num);
  const result = [];

  for (let i = 1; i <= M; i++) {
    const calc = N(i);
    
    if (calc === M) {
      result.push(i);
      break;
    }
    
    if (i === M) {
      result.push(0);
      break;
    }
  }


  return Math.min(result)
}

console.log(solution(input));

