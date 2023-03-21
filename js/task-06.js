// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const validationInput = document.getElementById('validation-input');
console.log(validationInput);

validationInput.addEventListener('input',(event) => {
    const inputLength = parseInt(event.target.getAttribute('data-length'));
    const valueLength = event.target.value.length;

    if (valueLength === inputLength) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
         event.target.classList.add('invalid');
         event.target.classList.remove('valid');
    }
});