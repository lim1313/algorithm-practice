function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

let a = solution(['mislav', 'mislav', 'stanko'], ['mislav', 'mislav']);

console.log(a);
