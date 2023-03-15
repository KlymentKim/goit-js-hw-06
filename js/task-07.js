// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputText = document.getElementById('font-size-control');
const textChangeSize = document.getElementById('text');
inputText.addEventListener('input', handleInputRange);
function handleInputRange (event) {
   textChangeSize.style.fontSize = event.currentTarget.value + "px";
}