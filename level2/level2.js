//N개의 최소공배수

function solution(arr) {
  return arr.reduce((acc, cur) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    let max = 0;
    return (acc * cur) / recursive(acc, cur);
  });
}

let value = [2, 6, 8, 14];

let a = solution(value);
console.log(a);
