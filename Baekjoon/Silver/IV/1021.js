// 회전하는 큐
const fs = require('fs'); 
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = A.split(' ').map(Number);
const NUMS = B.split(' ').map(Number);

function solution(n, nums) {
  const queue = Array.from({length: n}, (_, i) => i + 1);
  let count = 0;
  
  nums.forEach((el) => {
    while (true) {
      if (queue[0] === el) {
        queue.shift();
        break;
      }

      if (queue.indexOf(el) <= Math.floor(queue.length / 2)) {
        queue.push(queue.shift());
      } else {
        queue.unshift(queue.pop());
      }

      count++;
    }
  })

  return count
}

console.log(solution(N, NUMS));