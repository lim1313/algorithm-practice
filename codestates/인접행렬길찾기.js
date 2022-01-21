// function getDirections(matrix, from, to) {
//   let visitedIdx = [];

//   function repeat(from) {
//     let arr = matrix[from]
//       .map((v, i) => (v === 1 ? i : false))
//       .filter((v) => v !== false);

//     for (let i = 0; i < arr.length; i++) {
//       if (visitedIdx.includes(arr[i])) continue;
//       visitedIdx.push(arr[i]);
//       if (visitedIdx.includes(to)) return true;
//       if (repeat(arr[i])) {
//         return true;
//       }
//     }
//   }

//   return !!repeat(from);
// }

//! 인접 행렬 길찾기
// dfs 풀이
// 주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환

function getDirections2(matrix, from, to) {
  // 방문한 곳 체크
  let visited = Array.from(Array(matrix.length), () =>
    Array(matrix.length).fill(0)
  );

  function repeat(index) {
    if (index === to) return true;

    for (let i = 0; i < matrix.length; i++) {
      // 방문하지 않은 곳 && matrix가 1인 곳
      if (!visited[index][i] && matrix[index][i]) {
        visited[index][i] = 1;
        let value = repeat(i);
        if (value) return value;
      }
    }
  }

  return repeat(from) || false;
}

// bfs 풀이
function getDirections(matrix, from, to) {
  let queue = [from];
  let visited = [];

  while (queue.length) {
    let dequeue = queue.shift();

    if (dequeue === to) {
      return true;
    }

    for (let i = 0; i < matrix.length; i++) {
      if (!visited.includes(i) && matrix[dequeue][i]) {
        queue.push(i);
        visited.push(i);
      }
    }
  }
  return false;
}

const result2 = getDirections(
  [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
  ],
  1,
  4
);
console.log(result2); // false
