const name = "sami ullah";

// to lowercase
console.log(name.toLowerCase());

// to upercase
console.log(name.toUpperCase());

// to titlecase
function toTitleCase(string) {
  var sentence = string.toLowerCase().split(" ");

  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }

  sentence = sentence.join(" ");

  console.log(sentence);
}

// function call
toTitleCase(name);
