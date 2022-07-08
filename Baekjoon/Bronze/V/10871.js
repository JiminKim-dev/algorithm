// X보다 작은 수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const firstLine = input[0].split(' ');
const secondLine = input[1].split(' ');

const x = firstLine[1];

let answer = '';

for(let i = 0; i < secondLine.length; i++) {
  if(Number(secondLine[i]) < Number(x)) {
    answer += Number(secondLine[i]) + ' ';
  }
}

console.log(answer);
