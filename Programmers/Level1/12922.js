// 수박수박수박수박수박수?

function solution(n) {
  const anwser = "수박".repeat(n / 2);
  return anwser + (n % 2 === 1 ? "수": "");
}