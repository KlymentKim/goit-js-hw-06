// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const dicrementButtonClickListener = document.querySelector('[data-action="decrement"]');
const incrementButtonClickListener = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById('value');
// const counterValueElement = document.querySelector('#value');

let counterValue = 0;
dicrementButtonClickListener.addEventListener('click', () => { 
    counterValue-=1;
    counterValueElement.textContent = counterValue;
});

incrementButtonClickListener.addEventListener('click', () => {
    counterValue+=1;
    counterValueElement.textContent = counterValue;
});