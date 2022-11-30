// 후위 표기식2
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const [N, postfix, ...nums] = arr;
  const stack = [];
  const obj = {};
  
  for (let i = 0; i < N; i++) {
    obj[String.fromCharCode(65 + i)] = Number(nums[i]); 
  }
  
  postfix.split('').forEach(el => {
    if (s[el] === undefined) {
      const B = stack.pop();
      const A = stack.pop();
      switch (el) {
        case '+':
          stack.push(A + B);
          break;
        case '-':
          stack.push(A - B);
          break;
        case '/':
          stack.push(A / B);
          break;
        case '*':
          stack.push(A * B);
          break;
      }
    } else {
      stack.push(obj[el]);
    }
  })

  return stack[0].toFixed(2);
}

console.log(solution(input));