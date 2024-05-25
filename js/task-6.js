function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsElem = document.querySelector('#controls');
const inputElem = document.querySelector('input');
const buttonCreateElem = document.querySelector('[data-create]');
const buttonDestroyElem = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');

buttonCreateElem.addEventListener('click', () => {
  const amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    boxesElem.innerHTML = '';
    createBoxes(amount);
    inputElem.value = '';
  }
});

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i < amount; i++) {
    const boxElem = document.createElement('div');
    boxElem.style.width = `${30 + i * 10}px`;
    boxElem.style.height = `${30 + i * 10}px`;
    boxElem.style.backgroundColor = getRandomHexColor();
    arr.push(boxElem);
  }
  boxesElem.append(...arr);
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
}
buttonDestroyElem.addEventListener('click', destroyBoxes);
