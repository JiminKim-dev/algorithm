// 자릿수 더하기

function solution(n) {
  const toArr = n.toString().split('');
  const result = toArr.reduce((pre, cur) => Number(pre) + Number(cur), 0);
  return result
}