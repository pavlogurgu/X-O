const categories = document.querySelectorAll('.item');
const categoriesNumber = categories.length;
console.log(`Number of categories: ${categoriesNumber}`);

const elements = categories.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})
