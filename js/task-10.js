function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createButtonRef.addEventListener('click', onCreateButtonClick);
destroyButtonRef.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick() {
  createBoxes(inputRef.value);
}

function createOneBox() {
  const createdBox = document.createElement('div');
  createdBox.classList = 'created-box';
  createdBox.style.width = '30px';
  createdBox.style.height = '30px';
  createdBox.style.backgroundColor = getRandomHexColor();
  return createdBox;
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    createOneBox();

    boxes.push(createOneBox());
  }

  boxesRef.append(...boxes);
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function destroyBoxes() {
  while (boxesRef.firstChild) {
    boxesRef.removeChild(boxesRef.firstChild);
  }
}
