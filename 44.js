function make_sanwich(...ingredients) {
  for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
  }
}

console.log(make_sanwich("Bread slices", "Cheese slices", "Mayonnaise sauce"));
console.log(make_sanwich("Bread slices", "Cheese slices", "Mayonnaise sauce", "Salt", "Black pepper"));
console.log(make_sanwich("Bread slices", "Cheese slices"));
