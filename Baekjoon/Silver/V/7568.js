// 덩치
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  const [N, ...info] = arr;
  const transNumArr = info.map(el => el.split(' ').map(Number));

  const result = [];
  for (let i = 0; i < transNumArr.length; i++) {
    let count = 1;
    
    for (let j = 0; j < transNumArr.length; j++) {
      if (i === j) continue;

      if (transNumArr[i][0] < transNumArr[j][0] && transNumArr[i][1] < transNumArr[j][1]) {
        count++;
      }
    }
    result.push(count);
  }
  return result.join(' ');
}

console.log(solution(input));