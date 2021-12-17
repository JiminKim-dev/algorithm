// 핸드폰 번호 가리기
function solution(phone_number) {
  const lastNum = phone_number.slice(-4);
  const answer = "*".repeat(phone_number.length - 4) + lastNum;
  return answer;
}