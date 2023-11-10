// How to Use Object and Array Destructuring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

let settings = {
  userName: "loremIpsım",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org",
};

/* Extracting information in an object at once
let userName = settings.userName;
console.log(userName);
*/

let { userName: user, password, isActive, ip: serverIP, serverName } = settings;
console.log(userName, password, isActive, ip, serverName);
console.log(settings);
console.log(userName);

// Extraction of some information in the object
let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;

console.log(userName2, password2, isActive2, newSettings);

// Copying object with destructuring
let settings2 = settings;

settings2.userName = "Changed information";
console.log("settings", settings);
console.log("settings2", settings2);
