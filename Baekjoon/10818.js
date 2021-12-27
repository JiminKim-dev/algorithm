// 최소, 최대
// Math.min Math.max 사용시 '런타임 에러 (stacksizeexceeded)' 발생

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 메모리: 103824 KB / 시간: 864 ms
const inputArr = input[1].split(' ');
const arrToNum1 = inputArr.map(el => Number(el)).sort((pre, cur) => pre - cur);
console.log(`${arrToNum1[0]} ${arrToNum1[arrToNum1.length - 1]}`);


// 메모리: 90604 KB	/ 시간: 1616 ms
const arrToNum2 = inputArr.sort((pre, cur) => Number(pre) - Number(cur), 0);
console.log(`${arrToNum2[0]} ${arrToNum2[arrToNum2.length - 1]}`);


// 메모리: 90584 KB	/ 시간: 1656 ms
const inputArr = input[1].split(' ').sort((a, b) => a - b);
console.log(`${Number(inputArr[0])} ${Number(inputArr[inputArr.length - 1])}`);


