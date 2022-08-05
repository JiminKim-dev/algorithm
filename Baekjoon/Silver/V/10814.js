// 나이순 정렬
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


// 메모리: 46064kb, 시간: 400ms
function solution1(arr) {
  arr.shift();
  return arr
    .map(el => {
      const [age, name] = el.split(' ');
      return [Number(age), name]
    })
    .sort((a, b) => a[0] === b[0] ? a[1] > b[1] : a[0] - b[0])
    .map(el => el.join(' '))
    .join('\n');
}

console.log(solution1(input));

// 메모리: 25276kb, 시간: 344ms
function solution2(arr) {
  arr.shift();
  return arr.sort((a, b) => parseFloat(a) - parseFloat(b)).join('\n')
}

console.log(solution2(input));