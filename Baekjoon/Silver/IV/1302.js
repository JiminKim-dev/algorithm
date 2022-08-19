// 베스트셀러
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();

  let check = {}
  arr.forEach((el, index) => {
    if (!check[el]) check[el] = 1;
    check[el] += 1
  })

  const [key, _] = Object.entries(check)
  .sort(([aKey, aValue], [bKey, bValue]) => {
    if (aValue === bValue) {
      return aKey > bKey ? 1 : -1;
    }
    return bValue - aValue
  })[0];

  return key
}

console.log(solution(input));