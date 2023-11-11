// Generate Random Color
const randomColor = function randColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
  console.log(color);
};

// start Button
let intervalId;
const startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// stop Button
const stopChangingColor = function () {
  clearInterval(intervalId);
};

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

// event listeners
start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
