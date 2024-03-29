// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    // Заборонити перезавантаження сторінки під час відправлення форми
    event.preventDefault();  
    
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

      // Перевірити, чи заповнені всі поля
    if (emailInput.value === '' || passwordInput.value === '') {
    alert(`Всі поля повинні бути заповнені`);
    return;
    } 
    // Створити об'єкт з введеними даними
    const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

    // Вивести об'єкт в консоль
    console.log(formData);

    // Очистити поля форми
    loginForm.reset();
    
});