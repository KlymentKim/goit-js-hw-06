// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.
// change color і виводить значення кольору в span.color.
const getRandomHexColor = () =>{
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const div = document.querySelector('.widget');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const setColor = getRandomHexColor();
  document.body.style.backgroundColor = setColor;
  span.textContent = setColor;
});