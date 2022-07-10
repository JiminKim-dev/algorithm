// 하얀 칸
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = input.map((el,index) => {
  if (index % 2 === 0) {
    const filterArr = el.split('').filter((el, index) => index % 2 === 0 && el === 'F');

    return filterArr

  } else {
    const filterArr = el.split('').filter((el, index) => index % 2 === 1 && el === 'F');
    return filterArr
  }
}).flat().length;

console.log(solution);