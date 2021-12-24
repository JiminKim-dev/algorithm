// 사분면 고르기
// 해당 문제에서 fs 모듈은 '런타임 에러 (EACCES)'가 발생하기 때문에 readLine 모듈을 사용해야한다.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  console.log(solution(input[0], input[1]));
  process.exit();
});

function solution(x, y){
  return (x < 0) ? (y < 0 ? 3 : 2) : (y < 0 ? 4 : 1);
}