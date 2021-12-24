// 알람 시계
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let hours = parseInt(input[0]);
let minutes = parseInt(input[1]);

minutes -= 45;

if (minutes < 0) {
  hours === 0 ? hours = 23 : hours--;
  minutes += 60;
} 

console.log(`${hours} ${minutes}`);