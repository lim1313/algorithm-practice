// 뒤의 기능 먼저 완료 시 앞의 기능 배포 시 같이 배포
// 한번에 배포된 기능 수가 담긴 배열을 리턴

function solution(progresses, speeds) {
  let result = [];

  // progresses의 value가 100이 되기 위한 기간을 구한다.
  let progressArr = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  // progresses의 앞의 value보다 크다면 한번에 배포한다.
  for (let i = 0; i < progressArr.length; i++) {
    let index = progressArr.findIndex((v) => v > progressArr[i]);

    if (index >= 0) {
      result.push(index - i);
      i = index - 1;
    } else {
      result.push(progressArr.length - i);
      i = progressArr.length;
    }
  }
  return result;

  // while (progressArr.length) {
  //   let index = progressArr.findIndex((v) => v > progressArr[0]);

  //   if (index >= 0) {
  //     result.push(index);
  //     progressArr = progressArr.slice(index);
  //   } else {
  //     result.push(progressArr.length);
  //     progressArr = [];
  //   }
  // }
  // return result;
}

let result = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
console.log(result);
