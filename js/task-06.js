// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const validationInput = document.getElementById('validation-input');
console.log(validationInput);

validationInput.addEventListener('input',() => {
    const inputLength = parseInt(validationInput.getAttribute('data-length'));
    const valueLength = validationInput.value;

    if (valueLength ===inputLength) {
        validationInput.classList.add('valid');
        validationInput.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});