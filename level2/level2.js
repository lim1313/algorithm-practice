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

//JadenCase 문자열 만들기
function solution(s) {
  return s
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(' ');
}

let value = '3people unFollowed me';

let a = solution(value);
console.log(a);
