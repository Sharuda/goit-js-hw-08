import throttle from 'lodash.throttle';

const KEY_LOCALE_STORAGE = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(KEY_LOCALE_STORAGE)) || {};
const { email, message } = formEl.elements;

formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleClickButtonSubmit);

populateTextInput();

function handleInput() {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(KEY_LOCALE_STORAGE, JSON.stringify(formData));
}

function populateTextInput() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function handleClickButtonSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(KEY_LOCALE_STORAGE);
  event.currentTarget.reset();
  formData = {};
}
