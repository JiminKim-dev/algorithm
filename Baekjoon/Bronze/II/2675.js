const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = input[0];

function anwser(test) {
  let result = '';
  for (let i = 1; i <= test; i++) {
    const str = input[i].split(' ');
    const [r, s] = str;
    result += s.split('').map(el => el.repeat(r)).join('')+ '\n';
  }

  return result;
}


console.log(anwser(testCase));