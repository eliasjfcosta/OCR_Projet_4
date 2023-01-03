function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const form = document.forms['reserve'];
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelector('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalClose = document.querySelectorAll('.modal-cls');
let isValid = true;

// launch modal event
modalBtn.addEventListener('click', launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
  form.style.display = 'block';
}

// Close modal form
function closeModal() {
  modalbg.style.display = 'none';
  document.querySelector('.validation').style.display = 'none';
}

modalClose.forEach((el) => {
  el.addEventListener('click', closeModal);
});

// Regex definitions
const regexName = /([A-Za-z\-\s]*)/;
const regexEmail = /^([\w\-\.]+)@((?:[\w]+\.)+)([a-zA-Z]+)/;
const regexQty = /\d{1,2}/;

// Error
const showError = (element) => {
  isValid = false;
  element.closest('.formData').dataset.errorVisible = true;
};
const closeError = (element) => {
  element.closest('.formData').dataset.errorVisible = false;
};

// Validation form
const validate = form.addEventListener('submit', (e) => {
  e.preventDefault();

  isValid = true;

  // Validation firstname
  if (
    form.elements['first'].value.trim() === '' ||
    !regexName.test(form.elements['first'].value.trim())
  ) {
    showError(form.elements['first']);
  } else {
    closeError(form.elements['first']);
  }

  // Validation lastname
  if (
    form.elements['last'].value.trim() === '' ||
    !regexName.test(form.elements['last'].value.trim())
  ) {
    showError(form.elements['last']);
  } else {
    closeError(form.elements['last']);
  }

  // Validation email
  if (
    form.elements['email'].value.trim() === '' ||
    !regexEmail.test(form.elements['email'].value.trim())
  ) {
    showError(form.elements['email']);
  } else {
    closeError(form.elements['email']);
  }

  // Validation quantity
  if (
    form.elements['quantity'].value.trim() === '' ||
    !regexQty.test(form.elements['quantity'].value.trim())
  ) {
    showError(form.elements['quantity']);
  } else {
    closeError(form.elements['quantity']);
  }

  // Validation cgu checked
  if (!form.elements['cgu'].checked) {
    showError(form.elements['cgu']);
  } else {
    closeError(form.elements['cgu']);
  }

  //Validation location
  if (!document.querySelector('input[name="location"]:checked')) {
    showError(document.querySelector('input[name="location"]'));
  } else {
    closeError(document.querySelector('input[name="location"]'));
  }

  //Validation birthdate
  if (
    form.elements['birthdate'].value === '' ||
    parseInt(form.elements['birthdate'].value.split('-')[0]) <= 1945
  ) {
    showError(form.elements['birthdate']);
  } else {
    closeError(form.elements['birthdate']);
  }

  if (isValid) {
    form.style.display = 'none';
    document.querySelector('.validation').style.display = 'flex';
    form.reset();
  }
});
