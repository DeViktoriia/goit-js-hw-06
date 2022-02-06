const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainerRef = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    ingredientRef.classList.add('item');

    return ingredientRef;
  });
};

const elements = makeIngredients(ingredients);
ingredientsContainerRef.append(...elements);
