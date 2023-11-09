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
