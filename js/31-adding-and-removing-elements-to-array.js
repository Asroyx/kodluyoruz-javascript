// Adding and removing elements from an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, 50];
console.log("items - initial state: ", items);

// Array: Add element to the end -> push
items.push(50);
console.log(items);

// Array: Add element to the beginning -> unshift
items.unshift(5);
console.log(items);

// Array: Pop the last element -> pop
let lastItem = items.pop(); // // Added the last element to lastItem
console.log("lastItem: ", lastItem, "items: ", items);
