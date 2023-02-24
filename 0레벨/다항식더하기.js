// 문제 설명
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요.
// 같은 식이라면 가장 짧은 수식을 return 합니다.

// 입출력 예
// polynomial	    result
// "3x + 7 + x"	    "4x + 7"
// "x + x + x"	    "3x"

// 나의 풀이

function solution(polynomial) {
  var answer = 0;
  let result = 0;
  let str = polynomial.split("+");
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("x")) {
      answer += parseInt(str[i]) || 1;
    } else {
      result += +str[i];
    }
  }
  let num = [];
  if (answer) num.push(`${answer == 1 ? "" : answer}x`);
  if (result) num.push(result);
  return num.join(" + ");
}

solution("3x + 7 + x");
solution("x + x + x");
