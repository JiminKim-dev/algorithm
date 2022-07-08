const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const deque = [];
const result = [];

input.forEach(el => {
  const [command, num] = el.split(' ');

  switch(command) {
    case 'push_front':
      deque.unshift(num);
      break;
    case 'push_back':
      deque.push(num);
      break;
    case 'pop_front':
      if (!deque.length) {
        result.push('-1');
      } else {
        result.push(deque[0]);
        deque.shift();
      }
      break;
    case 'pop_back':
      if (!deque.length) {
        result.push('-1');
      } else {
        result.push(deque[deque.length - 1]);
        deque.pop();
      }
      break;
    case 'size':
      result.push(deque.length);
      break;
    case 'empty':
      !deque.length ? result.push('1') : result.push('0');
      break;
    case 'front':
      !deque.length ? result.push('-1') : result.push(deque[0]);
      break;
    case 'back':
      !deque.length ? result.push('-1') : result.push(deque[deque.length - 1]);
      break;
  }
})

console.log(result.join('\n'));