// 문제 설명
// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

// 입출력 예
// M	N	result
// 2	2	3
// 2	5	9
// 1	1	0

// 나의 풀이
function solution(M, N) {
  let answer = M * N - 1;
  return answer;
}
