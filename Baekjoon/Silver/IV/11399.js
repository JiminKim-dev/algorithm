// ATM
const fs = require('fs');
const [_, P] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const splitNumArr = arr.split(' ').map(Number).sort((a, b) => a - b);

  let sum = 0;

  return splitNumArr
  .map((el) => {
    sum += el;
    return sum;
  })
  .reduce((prev, curr) => prev + curr);
}

console.log(solution(P));
