// JadenCase 문자열 만들기
function solution(s) {
  return s.split(' ')
  .map(el => el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase())
  .join(' ')
}