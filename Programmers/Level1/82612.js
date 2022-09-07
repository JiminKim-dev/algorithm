// 부족한 금액 계산하기
function solution(price, money, count) {
  const calc = Array.from({length: count}, (_, index) => (index + 1) * price)
  .reduce((prev, curr) => prev + curr) - money;

  return calc < 0 ? 0 : calc
}

console.log(solution(3, 20, 4));