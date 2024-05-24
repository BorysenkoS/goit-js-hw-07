const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');
console.log(inputElem);
inputElem.addEventListener('input', onInputChange);
function onInputChange() {
  const value = inputElem.value;
  if (value.trim().length === 0) {
    spanElem.textContent = 'Anonymous';
  } else {
    spanElem.textContent = value.trim();
  }
}
