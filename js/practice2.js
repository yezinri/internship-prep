// 함수를 이용한 구구단 만들기
// 숫자 1개를 받아서 구구단을 출력하세요.

function timesTable(num) {
  for (i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

timesTable(5);
