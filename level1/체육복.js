function solution(n, lost, reserve) {
  // reserve와 lost 공통 value 제거
  let noDuplelost = lost.sort().filter((value) => !reserve.includes(value));
  let noDuplereserve = reserve.sort().filter((value) => !lost.includes(value));

  // reserve for문을 통해 lost 값 할당
  let count = n - noDuplelost.length;
  for (let i = 0; i < noDuplereserve.length; i++) {
    let front = noDuplereserve[i] - 1;
    let back = noDuplereserve[i] + 1;

    if (noDuplelost.includes(front)) {
      count++;
      noDuplelost.splice(noDuplelost.indexOf(front), 1);
    } else if (noDuplelost.includes(back)) {
      count++;
      noDuplelost.splice(noDuplelost.indexOf(back), 1);
    }
  }

  return count;
}
