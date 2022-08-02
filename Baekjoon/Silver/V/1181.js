const input = `4
a
b
c
a`.split('\n')

function solution(arr) {
  arr.shift();
  const setArr = new Set(arr)
  return [...setArr].sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length).join('\n')
}

console.log(solution(input));