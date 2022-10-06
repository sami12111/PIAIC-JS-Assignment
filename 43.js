let magicians = ["Sami", "umer", "faisal"];

function show_magicians(magician_name) {
  for (let i = 0; i < magician_name.length; i++) {
    console.log(magician_name[i]);
  }
}

function make_great(magician_name) {
  let new_array = [...magician_name];
  for (let i = 0; i < new_array.length; i++) {
    new_array[i] = "Hello " + new_array[i];
    console.log(new_array[i]);
  }
}

//nomal magicians
show_magicians(magicians);

//change copied array
make_great(magicians);

//original array hasn't changed
show_magicians(magicians);
