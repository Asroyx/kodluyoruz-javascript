// Commonly used array methods and array within array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/jS_array_methods…asp

const items = [1, 2, 3, 4, 5];

// Array within array:
const femaleUsers = ["Ayse", "Hulya", "Merve"];
const maleUsers = ["Ahmet", "Hasan", "Mehmet"];

// Adding at the beginning
items.unshift(femaleUsers);

// Adding at the end
items.push(maleUsers);

console.log(items);
console.log(items - length);
console.log(items[0].length);
console.log(items[0][0]);

// Extracting items from an array - splice(pos, item?)
let newItems = items.splice(1, 5);
console.log("newItems: ", newItems);
console.log("items: ", items);

// Find the index of an item in an array - indexOf('value')
items.unshift("lorem");
items.push("ipsum");
console.log(items.indexOf("ipsum"));

// Array Copy → slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // Remove the last item
console.log("copyItems", copyItems);
console.log("items", items);

console.log("After copying:");
copyItems = items.slice(); // Copy the array
copyItems.pop(); // Remove the last item
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // ES6 copy method
console.log(es6Items);

// ES6 method to merge multiple array structures
let allUsers = [...femaleUsers, ...maleUsers];
console.log(allUsers);

// Convert array data to string
console.log(allUsers.toString());
