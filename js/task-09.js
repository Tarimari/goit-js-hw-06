const body = document.querySelector(`body`);
const btn = document.querySelector(`.change-color`);
const bgColorCod = document.querySelector(`.color`);

btn.addEventListener(`click`, hendlerClick);

function hendlerClick() {
  bgColorCod.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
