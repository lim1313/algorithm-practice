// 연속된 문자열의 경우 삭제 가능
// 연속되는 문자가 없는 경우 삭제 불가능
// 모든 문자열이 삭제되었을 경우 => return 1
// 모든 문자열이 삭제되지 않았을 경우 => return 0

//! Elimination by Grouping https://programmers.co.kr/learn/courses/30/lessons/12973
// function solution(s) {
//   let sStr = s;

//   for (let i = 0; i < sStr.length; i++) {
//     let end;

//     for (let j = i; j < sStr.length; j++) {
//       if (sStr[i] !== sStr[j]) {
//         end = j;
//         break;
//       }
//       if (j === sStr.length - 1) {
//         end = j + 1;
//         break;
//       }
//     }

//     if (end - i !== 1) {
//       sStr = sStr.slice(0, i) + sStr.slice(end);
//       i = i - 2;
//     }
//   }
//   return +!sStr.length;
// }
// => 문제를 잘못 이해함..

//! 2개의 연속된 숫자만 제거할 수 있다
function solution1(s) {
  let sStr = s;

  for (let i = 0; i < sStr.length; i++) {
    if (sStr[i] === sStr[i + 1]) {
      sStr = sStr.slice(0, i) + sStr.slice(i + 2);
      i = i - 2 >= -1 ? i - 2 : -1;
    }
  }
  return +!sStr.length;
}

//=> 효율성 시간초과
function solution2(s) {
  let sStr = s;

  for (let i = 0; i < sStr.length; i++) {
    if (sStr[i] === sStr[i + 1]) {
      sStr = sStr.slice(0, i) + sStr.slice(i + 2);
      i = i - 2 >= -1 ? i - 2 : -1;
    }
  }
  return +!sStr.length;
}

// 정규표현식 풀이
function solution(s) {
  while (/(.)\1/.test(s)) {
    s = s.replace(/(.)\1/g, '');
  }
  return +(s.length === 0);
}

let result = solution('baaaabaa');
console.log(result);
