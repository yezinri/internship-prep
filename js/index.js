// let title = document.getElementById("title");
// console.log(title.style.color);
// title.style.color = "yellow";
// title.innerText = "Hello JavaScript";

// let obj = {
//   name: "Ian",
//   age: 34,
// };

// console.log(obj.name);
// obj.name = "David";
// console.log(obj.name);

// document.title = "DOM Practice";

// function notifyResize(event) {
//   let width = window.innerWidth;
//   let height = window.innerHeight;
//   console.log(width, height);
// }

// window.addEventListener("resize", notifyResize);

// const BASE_COLOR = "navy";
// const OTHER_COLOR = "green";

// function handleClick() {
//   let currentColor = title.style.color;
//   if (currentColor == BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// title.addEventListener("click", handleClick);

// 컬러가 4개 이상 들어가있는 배열을 만들고
// 특정 이벤트를 통해 랜덤으로 컬러가 선택되도록 만들어보세요.

const colors = ["pink", "yellow", "green", "purple", "orange"];

function randomColorChange() {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
}

title.addEventListener("click", randomColorChange);
