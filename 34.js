let pizza = ["Veggie Pizza", "Pepperoni Pizza", "Meat Pizza"];

for (let i = 0; i < pizza.length; i++) {
  console.log(pizza[i]);
}

//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < pizza.length; i++) {
  console.log("I like", pizza[i]);
}

console.log("I really like pizza");
