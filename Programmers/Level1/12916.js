// 문자열 내 p와 y의 개수

function solution(s){
  const p = s.split('').filter(e => e.match(/p/gi));
  const y = s.split('').filter(e => e.match(/y/gi));
  
  return p.length === y.length;
}
