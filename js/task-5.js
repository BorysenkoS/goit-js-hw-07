function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElem = document.querySelector('body');
console.log(bodyElem);
const btnElem = document.querySelector('.change-color');
console.log(btnElem);
const spanElem = document.querySelector('.color');
console.log(spanElem);

btnElem.addEventListener('click', () => {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
});
