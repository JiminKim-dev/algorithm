// 제로
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution (arr) {
  arr.shift();
    
  const stack = [];
  arr.forEach(el => el === 0 ? stack.pop() : stack.push(el))
  return stack.reduce((prev, curr) => prev + curr, 0);
}

console.log(solution(input));


/*
  const [K, ...input] => 메모리 21028KB, 시간 220ms
  const input => 메모리 16216KB, 시간 208ms
*/