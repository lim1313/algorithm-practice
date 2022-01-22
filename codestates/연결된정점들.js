//! [DFS / BFS] 연결된 정점들

function connectedVertices(edges) {
  // 간선의 개수를 카운트한다.
  // 이미 지난 간선을 체크한다.
  let edgesArr = [...edges];
  let result = 0;
  let visited = [];

  // edges 배열을 for loop를 통해 탐색한다.
  for (let a = 0; a < edgesArr.length; a++) {
    // 이미 방문했던 곳은 pass
    if (visited.includes(a)) continue;

    // 방문하지 않았던 곳을 queue에 담는다.
    let queue = [...edgesArr[a]];
    visited.push(a);
    result++;

    // 연결된 모든 간선들을 탐색한다.
    while (queue.length) {
      let dequeue = queue.shift();

      for (let i = 0; i < edgesArr.length; i++) {
        if (visited.includes(i)) continue;

        if (edgesArr[i].includes(dequeue)) {
          queue.push(...edgesArr[i]);
          visited.push(i);
        }
      }
    }
  }
  return result;
}

const result = connectedVertices([
  [0, 1],
  [2, 3],
  [4, 5],
]);
console.log(result); // 3
