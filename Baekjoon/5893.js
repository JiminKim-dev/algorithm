// 17배
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  const bin = BigInt('0b' + n);
  return (bin * 17n).toString(2);
}

console.log(solution(input));

/* 

- https://stackoverflow.com/questions/39334494/converting-large-numbers-from-binary-to-decimal-and-back-in-javascript

- https://stackoverflow.com/questions/69970281/getting-wrong-result-for-binary-to-decimal-even-after-using-bigint-in-javascri

문자열 앞에 '0b'를 추가하면 BigInt를 2진수로 변환할 수 있다.

- https://ko.javascript.info/bigint

BigInt형와 일반 숫자를 섞어서 연산할 수 없기 때문에 17뒤에 n을 붙여주어 BigInt 타입으로 변환한다.

- number 타입으로 변환해서 return하면 오답이 된다...
*/
