// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]

// 나의 풀이

function solution(numer1, denom1, numer2, denom2) {
  var answer = 0;

  let numer = numer1 * denom2 + numer2 * denom1;

  let denom = denom1 * denom2;

  for (let i = 0; i <= denom; i++) {
    if (numer % i === 0 && denom % i === 0) {
      console.log(denom % i === 0, denom, i);
      answer = i;
    }
  }

  return [numer / answer, denom / answer];
}
