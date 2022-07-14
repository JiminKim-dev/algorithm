// 도비의 난독증 테스트

// 다른 로직 생각해보기
// 메모리:10724KB	, 시간: 212ms
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(',').filter(el => el);

function solution(arr){
  return arr.map((el)=> {
    return el.split('\n').filter(str => str).sort((a, b) =>{
      return (a.toUpperCase() > b.toUpperCase()) - (b.toUpperCase() > a.toUpperCase());
    })[0]
  }).join('\n')
}

console.log(solution(input));
