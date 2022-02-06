let counterValue = 0;

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', onDecrementButtonClick);

buttonIncrementRef.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
  valueRef.textContent = counterValue -= 1;
}

function onIncrementButtonClick() {
  valueRef.textContent = counterValue += 1;
}
