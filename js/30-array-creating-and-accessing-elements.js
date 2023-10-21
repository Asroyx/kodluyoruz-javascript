// array - working with arrays

// creating an array

let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = [];

// getting the number of elements in an array

console.log(items.length);

document.querySelector("#info").innerHTML = items.length;

// calling the first element in an array

console.log(items[0]);

// calling the last element in an array

console.log(items[items.length - 1]);

// checking if the information in a variable is an array

console.log(typeof items);

console.log(Array.isArray(items));

// Which ones return isArray -> True?

console.log(" [] : ", Array.isArray([]));
console.log("1 : ", Array.isArray(1));
console.log("true: ", Array.isArray(true));
