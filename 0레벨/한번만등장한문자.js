// 문제 설명
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 입출력             예
// s	            result
// "abcabcadc"	    "d"
// "abdc"	        "abcd"
// "hello"	        "eho"

// 풀이
function solution(s) {
  const dict = {};
  s.split("").forEach((a) =>
    dict[a] !== undefined ? (dict[a] += 1) : (dict[a] = 1)
  );
  return Object.entries(dict)
    .map((a) => (a[1] === 1 ? a[0] : null))
    .filter((a) => a !== null)
    .sort()
    .join("");
}
