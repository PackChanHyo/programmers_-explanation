// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
// 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
// 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 입출력 예제
// 매개변수	값
// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]
// 매개변수	값
// n	6
// arr1	[46, 33, 33 ,22, 31, 50]
// arr2	[27 ,56, 19, 14, 14, 10]
// 출력	["######", "### #", "## ##", " #### ", " #####", "### # "]

// 나의 풀이

function solution(n, arr1, arr2) {
  var result = [];
  for (let i = 0; i < arr1.length; i++) {
    let answer = "";
    let two = arr1[i].toString(2).padStart(n, 0);
    let say = arr2[i].toString(2).padStart(n, 0);
    for (let j = 0; j < two.length; j++) {
      // console.log(split[j],split2[j])
      answer += "";
      if (two[j] === "1" || say[j] === "1") {
        answer += "#";
      } else {
        answer += " ";
      }
    }
    result.push(answer);
  }
  return result;
}
