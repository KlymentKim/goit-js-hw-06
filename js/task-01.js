//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const navTitleElments = document.querySelectorAll('.item').length; 
console.log(`Number of categories:`, navTitleElments);

// Для кожного элемента li.item у списку ul#categories
const itemElements = document.querySelectorAll('li.item');

itemElements.forEach(item => {
    // текст заголовку елемента (тегу <h2>)
    const titleName = item.querySelector('h2').textContent;
    console.log(`Category:`, titleName);

    // кількість елементів в категорії (усіх <li>, вкладених в нього).
    const categoryElements = document.querySelectorAll('.item').length;
    console.log(`Elements:`, categoryElements);

});





