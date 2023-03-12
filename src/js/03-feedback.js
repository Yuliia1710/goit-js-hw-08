import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {
  message: '',
  email: '',
};

localStorageInput();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const JsonFormData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, JsonFormData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  form.reset();

  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function localStorageInput() {
  const localStorageMsg = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (localStorageMsg) {
    Object.entries(localStorageMsg).forEach(([key, value]) => {
      form.elements[key].value = value;
      formData[key] = value;
    });
  }
}
