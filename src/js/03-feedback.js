const KEY_LOCALE_STORAGE = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const buttonSubmitEl = document.querySelector('[type = "submit"]');

let formData = JSON.parse(localStorage.getItem(KEY_LOCALE_STORAGE)) || {};
const { email, message } = formEl.elements;

formEl.addEventListener('input', handleInput);
buttonSubmitEl.addEventListener('submit', handleClickButtonSubmit);

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

  event.target.reset();
  localStorage.removeItem(KEY_LOCALE_STORAGE);
}
