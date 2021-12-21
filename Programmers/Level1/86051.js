// 없는 숫자 더하기

function solution(numbers) {
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numFilter = numArr.filter(x => !numbers.includes(x));
  
  return numFilter.reduce((a, b) => a + b);
}