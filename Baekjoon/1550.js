// parseInt 사용안함
// 16진수
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('')

function main(arr) {
  const decArr = arr.map(el => hexToDec(el)).reverse();
  return decArr.map((el, index) => el * Math.pow(16, index))
    .reduce((a, b) => a + b)
}

function hexToDec(num) {
  const hex = ['A', 'B', 'C', 'D', 'E', 'F']
  let findIndex = hex.findIndex(el => el === num.toUpperCase());
  return findIndex !== -1 ? findIndex + 10: Number(num);
}

console.log(main(input));