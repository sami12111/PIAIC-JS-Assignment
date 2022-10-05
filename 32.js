let current_users = ["sami", "faisal", "umer", "danish", "aqib"];

let new_users = ["shahzeb", "tayyab", "sami", "umer", "aqsa"];

for (let i = 0; i < new_users.length; i++) {
  if (new_users.includes(current_users[i])) {
    console.log("person will need to enter a new username");
  } else {
    console.log("username is available");
  }
}
