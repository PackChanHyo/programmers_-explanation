// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

// 입출력 예
// array	            result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	        -1
// [1]	                1

// 나의 풀이

function solution(array) {
  let map = new Map();

  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }
  let arr = Array.from(map.values());
  let max = Math.max(...arr);

  if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
    return -1;
  } else {
    return arr.indexOf(max);
  }
}
