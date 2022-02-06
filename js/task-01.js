const categoriesRef = document.querySelectorAll('li.item');

const numberOfCategories = categoriesRef.length;
console.log('Number of categories:', numberOfCategories);

categoriesRef.forEach(category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
