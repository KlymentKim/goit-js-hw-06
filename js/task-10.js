// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
// в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.
// Створи функцію destroyBoxes(), 
// яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonAdd = document.querySelector('[data-create]');
const buttonRemove = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

const createBoxes = amount => {
  const getDivBoxes = document.getElementById('boxes');
  const boxSize = 30;
  getDivBoxes.innerHTML = '';

  for (let i = 0; i < amount; i+=1){
    const createDiv = document.createElement('div');
    createDiv.style.width = `${boxSize + i * 10} px`;
    createDiv.style.height = `${boxSize + i * 10} px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    // добавляємо у кінець створені елементи у DIV
    getDivBoxes.appendChild(createDiv);
    return getDivBoxes;
}
 
};
const destroyBoxes = () =>{
  const deleteDiv = document.querySelector('#boxes');
  deleteDiv.innerHTML = "";
  // deleteDiv.removeChild();
  return deleteDiv;
}


  buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const amount = parseInt(input.value);
    createBoxes(amount);
  });
  
buttonRemove.addEventListener('click', destroyBoxes);
