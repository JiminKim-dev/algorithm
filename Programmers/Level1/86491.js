// 최소 직사각형
const input = [[60, 50], [30, 70], [60, 30], [80, 40]];

// 첫번째 풀이
const solution = (sizes) => {
  const width = [];
  const height = [];
  
  sizes.forEach(el => {  
    const [w, h] = el.sort((a, b) => b - a);
    width.push(w);
    height.push(h)
  })
  
  return Math.max(...width) * Math.max(...height);
}

// 두번째 풀이
const solution2 = (sizes) => {
  const sort = sizes.map(el => el.sort((a, b) => b - a));
  const width = Math.max(...sort.map(e => e[0]))
  const height = Math.max(...sort.map(e => e[1]))

  return width * height;
}