// 통계학
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(arr) {
  const [N, ...numbers] = arr;
  const sortArr = numbers.sort((a, b) => a - b);

  const mean = Math.round((numbers.reduce((prev, curr) => prev + curr, 0) / N));

  const median = sortArr[Math.floor(N / 2)];

  const findMode = () => {
    const checkMode = numbers.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1;
      return prev;
    }, {});

    const mode = Math.max(...Object.values(checkMode));
    const result = [];

    for (const num in checkMode) {
      if (checkMode[num] === mode){
        result.push(num)
      }
    }

    const sort = result.sort((a, b) => a - b);
    return result.length !== 1 ? sort[1] : sort[0];
  }

  const range = sortArr[N - 1] - sortArr[0];

  return [mean, median, Number(findMode()), range].join('\n');
} 

console.log(solution(input));