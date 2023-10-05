// Functions with Parameters and Return Values
//
// Basic Rules:
// 1. A function can take one or more parameters or none at all.
// 2. A function can return data or not.
// 3. It is good practice to minimize a function's dependencies.

let firstName = "Lorem";
let lastName = "Ipsum";
function greetings(firstName = "", lastName = "") {
  console.log(`Welcome ${firstName} ${lastName}`);
}

console.log(firstName);
greetings();
greetings(firstName, lastName);

function greetings2(firstName, lastName) {
  let info = `Welcome ${firstName} ${lastName}`;
  return info;
}

let greetingInfo = greetings2("First", "Last");
console.log(greetingInfo);
