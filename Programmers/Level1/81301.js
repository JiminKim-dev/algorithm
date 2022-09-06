const input = "oneone"

function solution(s) {
  const num = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let result = s;

  num.forEach((_,index) => {
    result = result.split(num[index]).join(index);
  })

  return Number(result);
}

console.log(solution(input));