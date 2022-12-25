// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요

// 입출력       예
// n	       result
// 10	       5
// 15	       8

// 풀이

function solution(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        arr.push(i);
      }
    }
  }
  return [...new Set(arr)].length;
}
