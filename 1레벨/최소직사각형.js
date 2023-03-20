// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
// 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

// sizes	                                        result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	        4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133

// 나의 풀이

function solution(sizes) {
  const max = [];
  const min = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      max.push(sizes[i][0]);
      min.push(sizes[i][1]);
    } else {
      max.push(sizes[i][1]);
      min.push(sizes[i][0]);
    }
  }
  return Math.max(...max) * Math.max(...min);
}
