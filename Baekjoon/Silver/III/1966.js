// 프린터 큐
const fs = require('fs'); 
const [_, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const result = [];

  for(let i = 0; i < arr.length - 1; i += 2) {
    const [N, M] = arr[i].split(' ').map(Number);
    const importance = arr[i + 1].split(' ').map(Number);
    let count = 0;
    let index = M;
    
    while (true) {
      const max = Math.max(...importance);
      const shiftNum = importance.shift();
      if (max === shiftNum && index === 0) {
        count++;
        break;
      } 
      
      if (max > shiftNum && index === 0) {
        importance.push(shiftNum);
        index = importance.length - 1;
      } else if (max > shiftNum) {
        importance.push(shiftNum);
        index -= 1;
      } else if (max === shiftNum) {
        count += 1;
        index -= 1;
      } 
    }
    result.push(count);
  }
  return result.join('\n');
}

console.log(solution(input));