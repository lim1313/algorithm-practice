// 메뉴 리뉴얼 https://programmers.co.kr/learn/courses/30/lessons/72411

// 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성
// 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합만 포함

function solution(orders, course) {
  // 각 배열 요소의 course 수의 조합을 구한다 /
  let newCourse = {};

  course.forEach((v) => (newCourse[v] = {}));
  orders.forEach((v, i) => (orders[i] = v.split('').sort().join('')));

  for (let i = 0; i < orders.length; i++) {
    function repeat(curCourse, index) {
      if (course.includes(curCourse.length)) {
        let count = newCourse[curCourse.length][curCourse];
        newCourse[curCourse.length][curCourse] = count ? ++count : 1;
      }

      for (let j = index; j < orders[i].length; j++) {
        repeat(curCourse + orders[i][j], j + 1);
      }
    }

    repeat('', 0);
  }
  // 각 course별로 가장 인기있는 조합을 도출한다.
  let max = [];

  for (let i = 0; i < course.length; i++) {
    let maxNum = Math.max(...Object.values(newCourse[course[i]]));
    let realMaxNum = maxNum > 1 ? maxNum : null;

    Object.values(newCourse[course[i]]).forEach(
      (v, index) =>
        v === realMaxNum && max.push(Object.keys(newCourse[course[i]])[index])
    );
  }
  return max.sort();
}

let result = solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]);
console.log(result);
