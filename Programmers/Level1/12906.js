// 같은 숫자는 싫어

function solution(arr) {
  const anwser = [];
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i + 1]) {
          anwser.push(arr[i])
      } 
  }
  return anwser
}