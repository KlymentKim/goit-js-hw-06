// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента
// (тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// покук Для кожного элемента li.item у списку ul#categories
const itemElements = document.querySelectorAll('.item');
console.log(`Number of categories:`, itemElements.length);

itemElements.forEach(item => {
    // витягуємо текст заголовку елемента (тегу <h2>)
    const titleName = item.querySelector('h2').textContent;
    console.log(`Category:`, titleName);

    // кількість елементів в категорії (усіх <li>, вкладених в нього).
    const sumLiItems = item.lastElementChild.children.length;
    console.log(`Elements:`, sumLiItems);

});



