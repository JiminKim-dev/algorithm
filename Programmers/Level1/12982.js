// 예산
function solution(d, budget) {
  const sortArr = d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sortArr.length; i++) {
    console.log(`count: ${count}, budget: ${budget}, cost: ${sortArr[i]}, sum: ${ budget - sortArr[i]}`);
    if (budget - sortArr[i] < 0) break;
    budget -= sortArr[i];
    count++;
  }

  return count
}