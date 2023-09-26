// ********** String Data Type Operations **********
// https://www.w3schools.com/jsref/jsref_obj_string.asp
let email = "hakanyalcinkaya@gmail.com";
let firstName = "hakan";
let lastName = "YALCINKAYA";

// String character count -> length
console.log(email.length);

// Finding the first character -> [0]
console.log(firstName[0]);
console.log(firstName.charAt(0));

// Uppercase / Lowercase
firstName = firstName.toUpperCase();
console.log(firstName);

// Searching for Desired Information in a String and Finding Its Position -> search:
console.log(email.search("@"));
console.log(email[15]);
email.search("nonexistent"); // -1
