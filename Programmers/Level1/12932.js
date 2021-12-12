// 자연수 뒤집어 배열로 만들기

function solution(n) {
  const result = n.toString().split('').map(e => parseInt(e)).reverse();
  
  return result
}