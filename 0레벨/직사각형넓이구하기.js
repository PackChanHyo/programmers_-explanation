// 문제 설명
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// 입출력 예
// dots	result
// [[1, 1], [2, 1], [2, 2], [1, 2]]	1
// [[-1, -1], [1, 1], [1, -1], [-1, 1]]	4

// 나의 풀이

function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  console.log(dots.sort((a, b) => a[0] - b[0]));
  // x축 가장 큰값 - 작은값 = x축 길이
  let width = Math.abs(dots[0][0] - dots[2][0]);
  // y축 가장큰값 - 작은값 = y축 길이
  let height = Math.abs(dots[0][1] - dots[1][1]);
  console.log(height);
  return width * height;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
