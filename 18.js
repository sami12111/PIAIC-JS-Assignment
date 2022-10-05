// Store the locations in a array. Make sure the array is not in alphabetical order.
let fav_locations = ["Lahore", "kashmir", "Islamabad", "Rawalpindi", "Murree"];

// Print your array in its original order.
console.log(fav_locations);

// Print your array in alphabetical order without modifying the actual list.
console.log([...fav_locations].sort());

// Show that your array is still in its original order by printing it.
console.log(fav_locations);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...fav_locations].reverse());

// Show that your array is still in its original order by printing it again.
console.log(fav_locations);

// Reverse the order of your list. Print the array to show that its order has changed.
fav_locations.reverse();
console.log(fav_locations);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
fav_locations.reverse();
console.log(fav_locations);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
fav_locations.sort();
console.log(fav_locations);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
fav_locations.reverse();
console.log(fav_locations);
