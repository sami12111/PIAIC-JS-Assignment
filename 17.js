// ofcourse, we will invite living to dinner

var people_list = ["sami", "ali", "ahmed"];

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`${people_list[2]} is not making dinner`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// ahmed is not attending the dinner
people_list.pop();

// ayehsa is goingf to attend the diner
people_list.push("ayehsa");

// Print a second set of invitation messages, one for each person who is still in your list.
people_list.map((p) => console.log(`Hello ${p} I would like to invite you to dinner`));

// found a big dinner table

// Add one new guest to the beginning of your array.
people_list.unshift("Zahra");

// adding elements to middle
people_list.splice(2, 0, "amna");

// adding element to last
people_list.push("sana");

people_list.map((p) => console.log(`Hello ${p} I would like to invite you to dinner`));

// now we have only 2 seats availble for guest

console.log("now we 2 seats availbe");

console.log(people_list);

var arr_length = people_list.length;

for (let i = 0; i < arr_length; i++) {
  if (i > 1) {
    // console.log(i);
    let removed_user = people_list.splice(2, 1);
    console.log("dear " + removed_user + " sorry you are not invited to the dinner");
  }
}

// printing the remaining 2 people
people_list.map((p) => console.log(`${p} you are still invited to dinner`));

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
people_list.length = 0;

// printing the empty array
console.log(people_list);
