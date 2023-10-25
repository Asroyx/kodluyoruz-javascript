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
