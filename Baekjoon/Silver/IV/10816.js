// 숫자 카드 2
const fs = require('fs'); 
const [N, A, M, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 176348 KB, 1116 ms
function solution(a, b) {
  const splitA = a.split(' ');
  const splitB = b.split(' ');

  const checkDuplicate = splitA.reduce((acc, cur) => { 
    acc[cur] = (acc[cur] || 0) + 1; 
    return acc;
  }, {});

  return splitB.map(el => checkDuplicate[el] || 0).join(' ');
}

// 147332 KB, 840 ms
function solution2(a, b) {
  const splitA = a.split(' ');
  const splitB = b.split(' ');

  const map = new Map();
  splitA.forEach(el => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  })

  return splitB.map(el => map.has(el) ? map.get(el) : 0).join(' ');
}

console.log(solution2(A, B));