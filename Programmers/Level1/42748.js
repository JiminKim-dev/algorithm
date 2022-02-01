// K번째 수
function solution(array, commands) {
  return commands.map((innerArr) => cutArray(array, innerArr))
}

function cutArray(arr, innerArr) {
  const [first, last, index] = innerArr;
  return arr.slice(first - 1, last).sort((a,b) => a - b)[index - 1];
}