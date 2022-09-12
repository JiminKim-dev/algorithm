// 짝지어 제거하기
const input = 'baabaa';

// 효율성 불합
// function solution(s){
//   const reg = /(\w)\1/;
//   const checkStr = s.split('').reduce((prev, curr) => (prev + curr).replace(reg, ''), '');
//   return checkStr === '' ? 1 : 0;
// }

function solution(s) {
  const stack = [];
  s.split('').forEach((el) => {
    if (el  === stack[stack.length - 1]) {
      return stack.pop();
    }
    stack.push(el)
  })

  return stack.length ? 0 : 1
}
