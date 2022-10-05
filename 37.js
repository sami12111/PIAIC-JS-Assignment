function make_shirt(size = "large", text = "I love JavaScript") {
  console.log(`the size is ${size} and message is ${text}`);
}

//call function with default parameters
make_shirt();

//call the function with custom parameters
make_shirt("medium", "Some custom message");
