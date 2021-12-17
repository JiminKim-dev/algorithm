// 정수 제곱근 판별

function solution(n) {
  const x =  Math.floor(Math.sqrt(n));
  return n / x === x ? Math.pow(x + 1, 2) : -1;
}