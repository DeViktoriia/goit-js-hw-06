function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const textColorRef = document.querySelector('.color');

bodyRef.addEventListener('click', onBodyColorChange);

function onBodyColorChange() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textColorRef.textContent = bodyRef.style.backgroundColor;
}
