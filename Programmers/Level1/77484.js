// 로또의 최고 순위와 최저 순위
const lottoArr = [0, 0, 0, 0, 0, 0];
const winNumArr = [38, 19, 20, 40, 15, 25];

// 첫번째 풀이
function solution(lottos, win_nums) {
  const unrecognizableNumCount = lottos.filter(el => !el).length;
  const checkWinCount = win_nums
    .map(num => lottos.find(el => el === num))
    .filter(el => el !== undefined).length;

  const checkScore = (num) => {
    return (num === 0) ? 6 : 6 - num + 1
  };

  return [checkScore(checkWinCount + unrecognizableNumCount), checkScore(checkWinCount)]
}

// 두번째 풀이: checkWinCount 개선
function solution2(lottos, win_nums) {
  const unrecognizableNumCount = lottos.filter(el => !el).length;
  const checkWinCount = lottos.filter(v => win_nums.includes(v)).length;

  const checkScore = (num) => {
    return (num === 0) ? 6 : 6 - num + 1
  };

  return [checkScore(checkWinCount + unrecognizableNumCount), checkScore(checkWinCount)]
}