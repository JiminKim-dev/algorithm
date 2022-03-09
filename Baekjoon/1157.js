const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
  const charMap = {}
  for (let i of str.toUpperCase()) {
    !charMap[i] ? charMap[i] = 1 : charMap[i]++;
  }

  let max = 0;
  let maxChar = '';
  for (let j in charMap) {
    if (charMap[j] > max) {
      max = charMap[j]
      maxChar = j;
    } else if(charMap[j] === max) {
      maxChar = '?';
    }
  }
  return maxChar
}

console.log(solution(input));