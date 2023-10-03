//*********** Using the Ternary Operator for a Short If Statement *********

// If you have a username, print it; otherwise, print "User information not found"

let userName = prompt("Enter Your User Information:");
let info = document.querySelector("#info");

// Ternary operator usage:
// condition ? trueValue : falseValue

info.innerHTML = userName.length > 0 ? userName : "User information not found";
