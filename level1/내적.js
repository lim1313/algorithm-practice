function solution(arr1, arr2) {
  let value = [];
  for (let i = 0; i < arr1.length; i++) {
    value.push(arr1[i] * arr2[i]);
  }
  return value.reduce((acc, cur) => acc + cur);
}

let a = solution([1, 2, 3, 4], [-3, -1, 0, 2]);

console.log(a);
