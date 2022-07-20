// 이상한 곱셈
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

/* 
  Bad Case
  메모리 12288 KB
  시간 3564 ms...
*/
function solution1(arr){
  const [A, B] = arr;
  let result = 0;

  A.split('').forEach(a => {
    B.split('').forEach(b => {
      result += Number(a) * Number(b);
    });
  });

  return result;
}

console.log(solution1(input));


/* 
  Good Case
  메모리 9924 KB
  시간 124 ms
*/

function solution2(arr){
  const [A, B] = arr; 
  const splitA = A.split('').map(el => Number(el));
  const splitB = B.split('').map(el => Number(el));

  return splitA.reduce((prev, cur) => prev + cur) * splitB.reduce((prev, cur) => prev + cur)
}

console.log(solution2(input));