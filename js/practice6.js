// 반복문을 이용해서 원하는 데이터 출력하기
let data = [
  { num: 0, id: "red", gender: "남자", age: 21 },
  { num: 1, id: "yellow", gender: "남자", age: 17 },
  { num: 2, id: "orange", gender: "여자", age: 16 },
  { num: 3, id: "green", gender: "여자", age: 55 },
];

// 1. 위 데이터에서 age가 20살 이상인 여성을 찾아서 출력해보세요.
for (let person of data) {
  if (person.age >= 20 && person.gender == "여자") {
    console.log(`${person.num}번 회원님은 20세 이상 여성입니다.`);
  }
}

// 2. 위 데이터에서 나이의 총합을 구해서 출력해보세요.
let totalAge = 0;
for (let person of data) {
  totalAge += person.age;
}

console.log(totalAge);

// 3. 위 데이터에서 가장 나이가 많은 사람과 적은 사람을 찾아서 출력해보세요.
let oldest = data[0];
let youngest = data[0];
for (let person of data) {
  if (person.age > oldest.age) {
    oldest = person;
  } else if (person.age < youngest.age) {
    youngest = person;
  }
}

console.log(
  `가장 나이가 많은 사람은 ${oldest.num}번 회원, 가장 나이가 적은 사람은 ${youngest.num}번 회원님입니다.`
);
