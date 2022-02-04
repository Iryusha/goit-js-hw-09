const startItem = document.querySelector('[data-start]');
const stopItem = document.querySelector('[data-stop]');
const bodyItem = document.querySelector('body');

startItem.addEventListener('click', onStartRundomColor);
stopItem.addEventListener('click', onStopRundomColor);

let timerId = null;
let isActive = false;

function onStartRundomColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  addsRundomColor();

  timerId = setInterval(addsRundomColor, 1000);
}

function onStopRundomColor() {
  clearTimeout(timerId);
  isActive = false;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addsRundomColor() {
  bodyItem.style.backgroundColor = getRandomHexColor();
}