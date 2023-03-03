// 문제 설명
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예
// dots	                                result
// [[1, 4], [9, 2], [3, 8], [11, 6]]	1
// [[3, 5], [4, 1], [2, 4], [5, 10]]	0

// 나의 풀이

function solution(dots) {
  var answer = [];
  function line(a, b, c, d) {
    let abline = (b[1] - a[1]) / (b[0] - a[0]);
    let cdline = (d[1] - c[1]) / (d[0] - c[0]);

    if (abline === cdline) {
      answer += 1;
    }
  }
  //1 과 2 | 3 과 4
  line(dots[0], dots[1], dots[2], dots[3]);
  // 1과 3 | 2 와 4
  line(dots[0], dots[2], dots[1], dots[3]);
  // 1과 4 | 2 와 3
  line(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}
