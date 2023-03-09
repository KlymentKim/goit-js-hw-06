
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

// navAllEliments.forEach((item) => console.log(item));
// console.log(navEl);
// console.log(navEli);