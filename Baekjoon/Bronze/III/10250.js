// ACM 호텔
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function calc(h, n) {
  const floor = n % h || h;
  const room = Math.ceil(n / h);
  return room >= 10 ? `${floor}${room}` : `${floor}0${room}`
}

// forEach 내부에서 console.log를 찍으면 더 오래 걸림
function solution(arr) {
  arr.shift();
  return arr.map(el => {
    const [h, _, n] = el.split(' ');
    return calc(h, n);
  });
}

console.log(solution(input).join('\n'));