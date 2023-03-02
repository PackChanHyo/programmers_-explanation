// 문제 설명
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는
// 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

// 입출력 예
// lines	                    result
// [[0, 1], [2, 5], [3, 9]]	    2
// [[-1, 1], [1, 3], [3, 9]]	0
// [[0, 5], [3, 9], [1, 10]]	8

// 나의 풀이

function solution(lines) {
  var answer = 0;
  //구분선 200 만들기
  let line = new Array(200);
  line.fill(0);
  //길이는 3까지
  for (let i = 0; i < 3; i++) {
    let one = lines[i][0];
    let two = lines[i][1];
    for (let j = one; j < two; j++) {
      // j에 100을 더해서 음수를 양수로 바꿈
      line[j + 100] += 1;
    }
  }
  for (let i in line) {
    if (line[i] > 1) {
      answer++;
    }
  }
  return answer;
}
