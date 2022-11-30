// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// my_string	        result
// "people"	            "peol"
// "We are the world"	"We arthwold"

// 풀이

function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string.indexOf(my_string[i]) === i) {
      answer += my_string[i];
    }
  }
  return answer;
}
