// 3진법 뒤집기
function solution(n) {
  let reverseTrit = n.toString(3).split('').reverse().join('');
  return parseInt(reverseTrit, 3)
}

console.log(solution(45));