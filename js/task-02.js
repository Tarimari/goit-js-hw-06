const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredient = document.querySelector("#ingredients");
let newElements = [];

ingredients.forEach(ingr => {
  const li = document.createElement("li");
  li.textContent = ingr;
  li.classList.add("item");
  newElements.push(li);
})
ingredient.append(...newElements);