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
function solution4(n, m) {
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

function solution5(m, n) {
  return [gcd(m, n), lcm(m, n)];
}

//제일 작은 수 제거하기
function solution6(arr) {
  let min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return arr.length ? arr : [-1];
}

//최소직사각형
function solution7(sizes) {
  // 가로 세로 길이 중 큰 값을 w / 작은 값을 h
  let w = 0;
  let h = 0;

  // 가로 세로 정렬 후 큰 값으 할당
  for (let i = 0; i < sizes.length; i++) {
    let [first, second] = sizes[i].sort();

    if (first > w) w = first;
    if (second > h) h = second;
  }

  return w * h;
}

//이상한 문자 만들기
function solution(s) {
  // 공백으로 split
  let str = s.split(' ');

  // 홀수번째 => 소문자, 짝수 => 대문자
  let strArr = str.map((v) => v.split(''));

  let changeStr = strArr.map((v) =>
    v.map((str, i) => (i % 2 ? str.toLowerCase() : str.toUpperCase())).join('')
  );

  return changeStr.join(' ');
}

//최소직사각형
let value = 'try hello world';

let a = solution(value);
console.log(a);
