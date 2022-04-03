// 스택

const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const stack = [];
  const result = [];
  
  arr.forEach(el => {
    const [command, num] = el.split(' ')
    
    switch(command) {
      case 'push': 
        stack.push(num)
        break
      case 'pop':
        stack.length !== 0 ? result.push(stack.pop()) : result.push('-1')
        break;
      case 'size':
        result.push(stack.length);
        break
      case 'top': 
        stack.length === 0 ? result.push('-1') : result.push(stack[stack.length -1]);
        break;
      case 'empty':
        stack.length === 0 ? result.push('1') : result.push('0')
        break;
    }
  })

  return result.join('\n');
}

console.log(solution(input));