// 1.
// 오브젝트 내에 인자(argument)를 받는 함수를 만들어서
// 짝수인지 홀수인지 판별하게 해보세요.

function isOdd(num) {
  if (num % 2) {
    console.log("홀수");
  } else {
    console.log("짝수");
  }
}

isOdd(2); // 짝수
isOdd(3); // 홀수

// 2.
// 배열 내 최대값 찾기
// 배열(array)을 인자(argument)로 받는 함수를 만들어서
// 그 배열의 최대값을 반환해보세요.

function findMaxNum(numArray) {
  return Math.max(...numArray);
}

const nums = [100000, 3, 3, 5, 6, 234, 3424, 11111, 333];
console.log(findMaxNum(nums)); // 100000
