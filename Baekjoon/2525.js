// 오븐 시계

const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [time, end] = input;
  const [hour, minute] = time.split(' ').map(el => Number(el));

  let endTime = Number(end);
  let endHour = hour;
  let endMinute = minute;

  
  const calc = (h, m, t) => {
    m += t

    if (m >= 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }

    if (h >= 24) {
      h -= 24
    }

    console.log(h, m);
  }

  calc(endHour, endMinute, endTime);
}


solution(input);