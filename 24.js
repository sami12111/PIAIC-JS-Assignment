//Tests for equality and inequality with strings

let username = "SAMI";
let age = 33;

console.log(username === "SAMI"); //true
console.log(age >= 40); //false

//Tests using the lower case function
console.log(username.toLowerCase() == "sami"); //true

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(age >= 33); //true
console.log(age <= 33); //true
console.log(age == 33); //true
console.log(age != 33); //false
console.log(age > 30); //true
console.log(age < 40); //true

//Tests using "and" and "or" operators
console.log(username == "SAMI" && age == 33); //true
console.log(username == "SAMI" || age > 40); //true

//Test whether an item is in a array
let names = ["sami", "ali", "danish"];
console.log("item is in a array", names.includes("ali")); //true
console.log("item is not in an array", !names.includes("umer")); //true
