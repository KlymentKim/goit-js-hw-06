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

// const array = [];
// for (let i = 0; i < itemElements.length; i+=1){
//     array.push(itemElements[i]);
// }
// console.log(`ArrayItems0: `, array);

// const uotPutArray = Array.from(itemElements);
// console.log(`ArrayItems1: `, uotPutArray.length);

// const secondViewArray = Array.prototype.slice.call(itemElements);
// console.log(`ArrayItems2: `, secondViewArray.length);

// const thirArray = [...itemElements];
// console.log(`ArrayItems3: `, thirArray.length);

// itemElements._proto_ = Array.prototype;
// console.log(`ArrayItems4: `,itemElements.length);






