// 수 정렬하기
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(arr) {
  arr.shift();
  return arr.sort((a, b) => a - b).join('\n')
}

console.log(solution(input));

/* 
  수 정렬하기2 https://www.acmicpc.net/problem/2751
  수 정렬하기3 https://www.acmicpc.net/problem/10989

  위 두 문제는 sort 메서드로 풀 수 없다.
*/