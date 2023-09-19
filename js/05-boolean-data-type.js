// ********** Working with the Boolean Data Type **********

// Understanding 0 and 1

let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); // false

userName = "user";

console.log("User Name:", Boolean(userName));
