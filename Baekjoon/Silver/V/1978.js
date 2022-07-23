// 소수찾기
const fs = require('fs'); 
const [_, NUMBERS] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  return arr.split(' ').map(Number).filter(num => {
    const notNaturalNum = num !== 1;
    const notMultiple = (n) => {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    return notNaturalNum && notMultiple(num)
  }).length;
}

console.log(solution(NUMBERS));