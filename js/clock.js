const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  let date = new Date();
  let hours = date.getHours();
  hours = hours < 10 ? "0" + String(hours) : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + String(minutes) : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + String(seconds) : seconds;
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
