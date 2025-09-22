const clock = document.querySelector("#clock");
// const date = new Date()

setInterval(() => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
