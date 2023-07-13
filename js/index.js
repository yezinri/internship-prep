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
