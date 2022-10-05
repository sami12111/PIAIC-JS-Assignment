// removing all the users from an array
let usernames_1 = [];

if (usernames_1.length == 0) {
  console.log("We need to find some users");
} else {
  for (let i = 0; i < usernames_1.length; i++) {
    if (usernames_1[i] === "admin") {
      console.log(`Hello ${usernames_1[i]}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${usernames_1[i]}, thank you for logging in again`);
    }
  }
}
