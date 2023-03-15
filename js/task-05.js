// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// const changeValue = () => {
//     return document.getElementById('name-input').value = 'Anonymous';
// }
const nameInPut = document.getElementById('name-input');
const nameOutPut = document.getElementById('name-output');

nameInPut.addEventListener('input', () => {
    nameOutPut.textContent = nameInPut.value || 'Anonymous';
});