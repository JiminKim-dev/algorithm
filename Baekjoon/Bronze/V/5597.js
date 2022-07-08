// 과제 안 내신 분..?

const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => Number(el));


const solution = (arr) => {
  const sortInputArr = arr.sort((a, b) => a - b);
  const difference = Array.from({length: 30}, (el, i) => i + 1);

  return difference.filter(x => !sortInputArr.includes(x)).join('\n')
}

console.log(solution(input));