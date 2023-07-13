// 1부터 30까지 숫자를 돌면서
// 3의 배수면 "fizz"
// 5의 배수면 "buzz"
// 3과 5의 배수면 "fizzbuzz"
// 나머진 그냥 출력

for (let i = 1; i < 31; i++) {
  if (i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
