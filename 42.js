let magicians = ["Sami", "umer", "faisal"];

function show_magicians(magician_name) {
  for (let i = 0; i < magician_name.length; i++) {
    console.log(magician_name[i]);
  }
}

function make_great(magician_name) {
  for (let i = 0; i < magician_name.length; i++) {
    magician_name[i] = "Hello " + magician_name[i];
    console.log(magician_name[i]);
  }
}

//nomal magicians
show_magicians(magicians);

//change original array
make_great(magicians);

//original array has also changed after this call
show_magicians(magicians);
