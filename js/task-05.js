const inputNameRef = document.querySelector('#name-input');
const outNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  outNameRef.textContent = event.currentTarget.value;
  if (!outNameRef.textContent) {
    outNameRef.textContent = 'Anonymous';
  }
}
