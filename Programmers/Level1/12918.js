// 문자열 다루기 기본

function solution(s) {
  const reg = /[^0-9]/g;
  
  if (s.length === 4 || s.length === 6) {
      return !reg.test(s);
  } 
  
  return false
}