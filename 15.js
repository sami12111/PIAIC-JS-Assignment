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
