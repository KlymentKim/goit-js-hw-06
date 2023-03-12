// const htmlElem = document.documentElement;
// console.log(htmlElem);
// const head = document.head;
// console.log(head);
// const body = document.body;
// console.log(body);
// const list = (body).children;
// console.log(list);


//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const navAllEliments = document.querySelectorAll('.item').length; 
console.log(`Number of categories:`, navAllEliments);

// Для кожного элемента li.item у списку ul#categories
const listItemElements = document.querySelector('h2');
console.log(`Category:`, listItemElements);

const navElCategories = document.querySelectorAll('ul').children.length;
// const navEli = document.querySelector('li');
// const navAllEliments = document.querySelectorAll('ul');

let countCategories = 0;
navElCategories.forEach((item) => item+=countCategories); 
console.log(countCategories);

console.log(`Number of categories: ${countCategories}`);
console.log(`Category: Animal`);
console.log(`Elements: `);
console.log(`Category: Product`);
console.log(`Elements: `);
console.log(`Category: Technologies`);
console.log(`Elements: `);




// console.log(`Number of categories: ${navAllEliments}`);
// console.log(`Category: Animal`);
// console.log(`Elements: `);
// console.log(`Category: Product`);
// console.log(`Elements: `);
// console.log(`Category: Technologies`);
// console.log(`Elements: `);

//  navAllEliments.forEach((item) => console.log(item));
// console.log(navEl);
// console.log(navEli);