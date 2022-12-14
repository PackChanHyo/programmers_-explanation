// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예
// before	after	result
// "olleh"	"hello"	1
// "allpe"	"apple"	0

// 풀이
function solution(before, after) {
  before = before.split("").sort();
  after = after.split("").sort();
  return before.filter((e, i) => e === after[i]).length === after.length
    ? 1
    : 0;
}

// 또 다른 풀이

function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
