// 정렬
function solution(numbers) {
  let numSort = numbers
    .map((v) => v + '')
    .sort((a, b) => +(b + a) - +(a + b))
    .join('');

  return numSort[0] === '0' ? '0' : numSort;
}

let result = solution([0, 0]);
console.log(result);
