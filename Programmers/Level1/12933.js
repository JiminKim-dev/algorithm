// 정수 내림차 순으로 배치하기

function solution(n) {
  const answer = n.toString().split('').sort((a, b) => b - a).join('');
  return +answer
}