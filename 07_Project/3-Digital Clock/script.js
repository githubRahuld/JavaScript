const clock = document.querySelector("#clock");

setInterval(function () {
  const currTime = new Date().toLocaleTimeString();
  //   console.log(currTime);
  clock.innerHTML = currTime;
}, 1000);
