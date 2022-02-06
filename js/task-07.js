const inputRangeRef = document.querySelector('#font-size-control');
const textSpanRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', OnInputRangeChange);

function OnInputRangeChange() {
  textSpanRef.style.fontSize = `${inputRangeRef.value}px`;
}
