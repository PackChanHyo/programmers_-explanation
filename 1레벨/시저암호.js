// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 입출력     예
// s	    n	    result
// "AB"	    1	    "BC"
// "z"	    1	    "a"
// "a B z"	4	    "e F d"

// 나의 풀이

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  const answer = [];
  let split = s.split("");
  console.log(split);
  for (let i = 0; i < split.length; i++) {
    let en = lower.includes(split[i]) ? lower : upper;
    let ok = en.indexOf(split[i]) + n;
    if (ok >= 26) {
      ok -= 26;
    }
    if (split[i] !== " ") {
      answer.push(en[ok]);
    } else {
      answer.push(" ");
    }
  }
  return answer.join("");
}
