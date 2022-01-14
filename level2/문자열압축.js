// 문자열 압축(https://programmers.co.kr/learn/courses/30/lessons/60057)

function solution(s) {
  // 범위 2 ~ s.length/2
  let result = s.length;

  // n단위로 비교하여 일치하지 않는 경우 changeStr 변수에 반복 숫자와 n단위 문자를 합한다
  for (let i = 1; i <= s.length / 2 + 1; i++) {
    let [n, m] = [0, i];
    let changeStr = '';
    let repeatNum = 1;

    while (m <= s.length - 1) {
      let frontStr = s.slice(n, m);

      n += i;
      m += i;

      let curStr = s.slice(n, m);

      if (frontStr === curStr) {
        repeatNum++;
      } else {
        changeStr = changeStr + (repeatNum >= 2 ? repeatNum : '') + frontStr;
        repeatNum = 1;
      }
    }

    changeStr += (repeatNum >= 2 ? repeatNum : '') + s.slice(n);

    if (result > changeStr.length) result = changeStr.length;
  }

  // changeStr 길이가 가장 짧은 changeStr의 길이를 return
  return result;
}

let result = solution('ababcdcdababcdcd');
console.log(result);
