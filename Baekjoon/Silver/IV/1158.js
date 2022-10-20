// 요세푸스 문제
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 	18100KB,	2564ms
const solution1 = (arr) => {
  const [N, K] = arr;
  const numArr = Array.from({length: N}, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K; j++) {
      const shift = numArr.shift();
      if (j === K) {
        result.push(shift);
      } else {
        numArr.push(shift);
      }
    }
  }

  return `<${result.join(', ')}>`;
}

// 11124KB, 128ms
const solution2 = (arr) => {
  const [N, K] = arr;
  const numArr = Array.from({length: N}, (_, i) => i + 1);
  const result = [];

  let count = 0;

  while (numArr.length) {
    count = (count + K - 1) % numArr.length;
    result.push(numArr.splice(count, 1));
  }

  return `<${result.join(', ')}>`;
}