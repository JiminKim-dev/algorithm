// 균형잡힌 세상
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(arr) {
  arr.pop();

  return arr.map(el => {
    const filterAlphabet = el.replace(/([A-Za-z .])/g, '');
    const stack = [];

    for (let i = 0; i < filterAlphabet.length; i++) {
      switch (filterAlphabet[i]) {
        case '[':
        case '(':
          stack.push(filterAlphabet[i])
          break;
        case ']':
          if (stack[stack.length - 1] === '[') {
            stack.pop();
            break;
          } else {
            return 'no'
          }
        case ')': 
          if(stack[stack.length - 1] === '(') {
            stack.pop();
            break;
          } else {
            return 'no'
          }
      }
    }

    return stack.length !== 0 ? 'no' : 'yes'
  })
  .join('\n')
}

console.log(solution(input));