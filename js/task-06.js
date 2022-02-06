const inputValidationRef = document.querySelector('#validation-input');

inputValidationRef.addEventListener('blur', OnInputFocusChange);

function OnInputFocusChange(event) {
  if (event.currentTarget.value.length === Number(inputValidationRef.dataset.length)) {
    inputValidationRef.classList.add('valid');
    inputValidationRef.classList.remove('invalid');
  } else {
    inputValidationRef.classList.add('invalid');
    inputValidationRef.classList.remove('Valid');
  }
}
