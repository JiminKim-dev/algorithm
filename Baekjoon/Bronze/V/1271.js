// 엄청난 부자2
// 간단한 문제였지만 BigInt 함정이 인상적이었다.
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(num => BigInt(num));
const [num1, num2] = input;

function answer(m, n) {
  let result = '';

  result += (m / n) + '\n';
  result += m % n;

  return result;
}

console.log(answer(num1, num2));