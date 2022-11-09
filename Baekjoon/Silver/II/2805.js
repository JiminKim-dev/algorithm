// 나무 자르기
const fs = require('fs'); 
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(a, b) {
  const [N, M] = a.split(' ').map(Number);
  const HEIGHTS = b.split(' ').map(Number);

  let max = Math.max(...HEIGHTS);
  let min = 0;
  let mid = 0;
  let result = 0;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let sum = 0;
    HEIGHTS.forEach(el => {
      if (el >= mid) {
        sum += el - mid
      }
    })

    if (sum >= M) {
      if (mid > result) result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return result;
}

console.log(solution(A, B));