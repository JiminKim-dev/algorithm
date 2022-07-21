const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(arr) {
  const [A, B] = arr;

  const convert = (str) => {
    return  Number(str.split('').reverse().join(''));
  }
  const reverseA = convert(A)
  const reverseB = convert(B)

  return convert(String(reverseA + reverseB))
}

console.log(solution(input));