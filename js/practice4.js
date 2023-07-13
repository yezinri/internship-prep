// 컬러가 4개 이상 들어가있는 배열을 만들고
// 특정 이벤트를 통해 랜덤으로 컬러가 선택되도록 만들어보세요.

const colors = ["pink", "yellow", "green", "purple", "orange"];

function randomColorChange() {
  title.style.color = colors[Math.floor(Math.random() * colors.length)];
}

title.addEventListener("click", randomColorChange);
