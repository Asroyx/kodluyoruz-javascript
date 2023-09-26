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

// Extracting a portion of the string -> slice: (domain information)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);
console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))); // extracting only the 'gmail' part
