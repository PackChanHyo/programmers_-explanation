// 문제 설명
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// box	        n	result
// [1, 1, 1]	1	1
// [10, 8, 6]	3	12

// 풀이

function solution(box, n) {
  let answer = box
    .map((nemo) => (nemo / n) << 0)
    .reduce((acc, cur) => acc * cur, 1);
  return answer;
}

// 알게되었던 것

// 비트 연산자

// 이제부터는 두 값을 비교하거나 비트 단위에서 뒤집는 것을 하는 연산자는 아닌, 비트들을 밀어주는 연산자이며,
// 시프트 연산자들은 모두 비트를 몇칸씩 밀어주는 역할을 한다.
// 10진수에서 굳이 따지자면 곱하기 10 이나 나누기 10 정도의 역할을 해 주는 연산자이다.
