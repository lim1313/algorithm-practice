//행렬의 덧셈
function solution1(arr1, arr2) {
  let answer = Array.from({ length: arr1.length }, () => []);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

//핸드폰 번호 가리기
function solution2(phone_number) {
  let backNum = phone_number.slice(-4);
  let frontNum = phone_number.slice(0, -4);

  frontNum = frontNum.replace(frontNum, '*'.repeat(frontNum.length));
  return frontNum + backNum;
}

//핸드폰 번호 가리기 => 정규표현식으로 풀기
function solution3(phoneNum) {
  let regex = /\d(?=\d{4})/g;

  return phoneNum.replace(regex, '*');
}

//하샤드수
function solution4(x) {
  let num = x
    .toString()
    .split('')
    .map((v) => +v);
  let sumNum = num.reduce((acc, cur) => acc + cur);

  return !(x % sumNum);
}

//최대공약수와 최소공배수
function solution(n, m) {
  let answer = [];
  let min = n > m ? m : n;
  let max = n > m ? n : m;

  //최대 공약수
  for (let i = min; i > 0; i--) {
    if (!(max % i) && !(min % i)) {
      answer.push(i);
      break;
    }
  }

  //최소 공배수
  answer.push((m * n) / answer[0]);

  return answer;
}

//최대공약수와 최소공배수 => 유클리드 호제법
function gcd(m, n) {
  if (!(m % n)) return n;
  return gcd(n, m % n);
}

function lcm(m, n) {
  return (m * n) / gcd(m, n);
}

function solutin(m, n) {
  return [gcd(m, n), lcm(m, n)];
}

let a = solutin(44, 3);
console.log(a);
