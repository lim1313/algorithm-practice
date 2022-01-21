//! 인접행렬
// ('undirected' 일시 무향, 'directed' 일시 방향)

function createMatrix(edges) {
  // 인접행렬의 길이를 구한다. => 1,2번째 value 중에서 큰 값을 구한다.
  let max = 0;

  edges.forEach((v) => {
    let bigger = v[0] > v[1] ? v[0] : v[1];
    if (bigger > max) max = bigger + 1;
  });

  let matrixArr = Array.from({ length: max }, () => Array(max).fill(0));
  console.log(matrixArr);

  // directed는 단방향 연결
  // undirected는 양방향 연결
  for (let i = 0; i < edges.length; i++) {
    let [start, end, dir] = edges[i];
    matrixArr[start][end] = 1;
    if (dir === 'undirected') matrixArr[end][start] = 1;
  }

  return matrixArr;
}

const output1 = createMatrix([
  [0, 3, 'directed'],
  [0, 2, 'directed'],
  [1, 3, 'directed'],
  [2, 1, 'directed'],
]);
console.log(output1);

//TODO 이중배열 만들기
{
  let max = 3;
  let matrixArr1 = Array.from(Array(max), () => Array(max).fill(0));
  let matrixArr2 = Array.from({ length: max }, () => Array(max).fill(0));
  let matrixArr3 = Array(max).fill(Array(max).fill(0));
}
