// 더하기 사이클
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function calc(num) {
  const a = Math.floor(num / 10);
  const b = num % 10;
  const c = (a + b) % 10;

  return b * 10 + c 
}

function solution(num) {
  const t = num;
  let result = num;
  let count = 0;

  while (true) {
    result = calc(result)
    count++;

    if (result === t) break;
  }

  return count
}

console.log(solution(Number(input)));