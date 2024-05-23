const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (
    formElem.elements.email.value === '' ||
    formElem.elements.password.value === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    const data = {
      email: formElem.elements.email.value.trim(),
      password: formElem.elements.password.value.trim(),
    };

    console.log(data);
    formElem.reset();
  }
});
