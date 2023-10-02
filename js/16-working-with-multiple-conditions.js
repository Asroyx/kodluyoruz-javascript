// ********** Working with Multiple Conditions **********

let userName = prompt("Your Username:");
let age = prompt("Your Age:");
let info = document.querySelector("#info");

if (!userName || !age) {
  info.innerHTML = "Please provide your Username and Age correctly.";
} else if (age >= 18) {
  info.innerHTML = "You are eligible for a driver's license.";
} else {
  info.innerHTML = "Sorry, you are not eligible for a driver's license.";
}
