//! [중복순열] 가위바위보
function rockPaperScissors(rounds) {
  let round = rounds || 3;
  let rpsCase = ['rock', 'paper', 'scissors'];
  let result = [];

  function repeat(cur) {
    if (cur.length === round) return result.push(cur);
    for (let i = 0; i < rpsCase.length; i++) {
      repeat(cur.concat(rpsCase[i]));
    }
  }

  repeat([]);
  return result;
}

//! [순열] 새로운 치킨 소스 레시피
function newChickenRecipe(stuffArr, choiceNum) {
  let rgx = /0{3,}/g;
  let cmb = [];
  stuffArr.sort();

  function repeat(cur, arr) {
    if (cur.length === choiceNum) return cmb.push(cur);

    for (let i = 0; i < arr.length; i++) {
      let rgxMatch = arr[i].toString().match(rgx);
      if (rgxMatch) continue;

      repeat(
        cur.concat(arr[i]),
        arr.filter((v, j) => j !== i)
      );
    }
  }

  repeat([], stuffArr);
  return cmb;
}

//! [조합] 블랙잭은 지겨워
function boringBlackjack(cards) {
  let cmb = 0;

  // 소수 판별
  function isPrime(num) {
    let numSum = num.reduce((acc, cur) => acc + cur);

    for (let i = 2; i <= Math.sqrt(numSum); i++) {
      if (!(numSum % i)) return false;
    }
    return true;
  }
  // 조합
  function repeat(cur, index) {
    if (cur.length === 3) return isPrime(cur) && cmb++;

    for (let i = index; i < cards.length; i++) {
      repeat(cur.concat(cards[i]), i + 1);
    }
  }

  repeat([], 0);
  return cmb;
}

//! [GCD] 빼빼로 데이
function gcd(m, n) {
  if (!(m % n)) return n;
  return gcd(n, m % n);
}

function divideChocolateStick(M, N) {
  // 최대 공약수를 구하고 최대 공약수의 모든 약수를 구한다.
  let gcdNum = gcd(M, N);
  let divisorArr = [];

  for (let i = 1; i <= Math.sqrt(gcdNum); i++) {
    if (!(gcdNum % i)) {
      divisorArr.push(i);
      divisorArr.push(gcdNum / i);
    }
  }
  divisorArr.sort((a, b) => a - b);

  // 모든 약수로 빼빼로를 나눈다.
  for (let i = 0; i < divisorArr.length; i++) {
    let divisorNum = divisorArr[i];
    divisorArr[i] = [divisorNum, M / divisorNum, N / divisorNum];
  }

  return divisorArr;
}

//! [멱집합] 집밥이 그리워
function missHouseMeal(sideDishes) {
  sideDishes.sort();
  let result = [];

  function repeat(cur, index) {
    result.push(cur);

    for (let i = index; i < sideDishes.length; i++) {
      repeat(cur.concat(sideDishes[i]), i + 1);
    }
  }

  repeat([], 0);
  return result;
}

let output = missHouseMeal(['eggroll', 'kimchi', 'fishSoup']);
console.log(output);
/*
[ [], 
  [ 'eggroll' ], 
  [ 'eggroll', 'fishSoup' ], 
  [ 'eggroll', 'fishSoup', 'kimchi' ], 
  [ 'eggroll', 'kimchi' ], 
  [ 'fishSoup' ], 
  [ 'fishSoup', 'kimchi' ], 
  [ 'kimchi' ]
] 
*/
