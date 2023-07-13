let a = 50;
a = 30;
a = 30.3;
daysOfWeek = ["Monday", "Tuesday"];

myObject = {
  name: "David",
  age: 33,
  favoriteMovies: ["Elemental", "The Matrix"],
  favoriteFoods: [
    {
      name: "Pizza",
      calories: 300,
    },
  ],
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

function sayHello(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("Yejin", 27);
myObject.sayMyName();

if (3 < 5) {
  console.log("3 is smaller than 5");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let array = ["사과", "배", "복숭아", "바나나", "딸기"];

for (let i of array) {
  console.log(i);
}

for (let i in array) {
  console.log(array[i]);
}

let i = 0;
while (i < 5) {
  console.log("inside while loop");
  i++;
}

let value = 0;
do {
  console.log(value);
  value++;
} while (value < 5);
