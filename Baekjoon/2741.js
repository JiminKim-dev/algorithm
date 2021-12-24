// N 찍기
const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

let result = '';
for(let i = 1; i <= input; i++) {
  // console.log(i)를 하면 시간초과가 된다.
    result += i + '\n';
}

console.log(result);
