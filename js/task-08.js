const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (!email || !password) {
    return alert('Все поля должны быть заполнены');
  }

  const formData = {
    email,
    password,
  };

  loginFormRef.reset();

  console.log(formData);

  // Альтернативный метотод, через FormData

  // const formData = new FormData(event.currentTarget);

  // formData.forEach((value, name) => {
  //     console.log('name', name);
  //     console.log('value', value);
  //     loginFormRef.reset();
  // })
  // console.dir(event.currentTarget.elements.email.value);
}
