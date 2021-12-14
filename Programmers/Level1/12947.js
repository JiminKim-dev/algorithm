// 하샤드 수
function solution(x) {
  const num = x.toString().split('').reduce((pre,cur) => Number(pre) + Number(cur), 0)
  
  return x % num === 0 ? true : false
}