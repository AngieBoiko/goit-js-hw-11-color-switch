'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action=start]'),
    stopBtn: document.querySelector('[data-action=stop]'),
}
let timeId = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', changeColorFunc);
refs.stopBtn.addEventListener('click', stopChangeColorFunc);

function stopChangeColorFunc() {
    clearInterval(timeId);
    refs.startBtn.removeAttribute('disabled');
};

function changeColorFunc() {
  timeId= setInterval((colors) => {
        const bodyColor = colors[randomIntegerFromInterval(0, colors.length-1)];
      document.body.style.backgroundColor = bodyColor;
      refs.startBtn.setAttribute('disabled','true');
     }, 1000, colors);
};




