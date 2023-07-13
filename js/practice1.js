// 1.
// 오브젝트 내에 인자(argument)를 받는 함수를 만들어서
// 짝수인지 홀수인지 판별하게 해보세요.

myObject = {
  num: 1000,
  isOdd: function () {
    if (this.num % 2) {
      console.log("홀수");
    } else {
      console.log("짝수");
    }
  },
};

myObject.isOdd(); // 짝수

// 2.
// 배열 내 최대값 찾기
// 배열(array)을 인자(argument)로 받는 함수를 만들어서
// 그 배열의 최대값을 반환해보세요.

function findMaxNum(numArray) {
  let maxNum = numArray[0];
  for (i of numArray) {
    if (i > maxNum) {
      maxNum = i;
    }
  }
  return maxNum;
}

const nums = [99999, 3, 3, 5, 6, 234, 3424, 5000000, 333];
console.log(findMaxNum(nums)); // 5000000
