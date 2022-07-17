// 농구 경기
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(arr) {
  arr.shift();

  const firstStrArr = arr.map(el => {
    return el.substring(1, 0);
  });
  
  const checkPlayer = firstStrArr.reduce((pre, cur) => {
    pre[cur] = (pre[cur] || 0) + 1;
    return pre;
  },{})

  const result = [];
  for (const key in checkPlayer) {
    if (checkPlayer[key] >= 5) {
      result.push(key)
    }
  }

  return result.length ? result.sort().join('') : 'PREDAJA';
}

console.log(solution(input));