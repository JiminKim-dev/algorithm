// 올바른 괄호
function solution(s){
  const splitStr =  s.split('');
  const stack = [];

  if (splitStr[0] === ')') return false;

  splitStr.forEach(el => {
    if (el === '(') stack.push(el);

    if (el === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      }
    }
  })

  return stack.length ? false : true
}