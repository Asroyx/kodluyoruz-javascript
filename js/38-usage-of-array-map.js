// Array Map Usage
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

// Keep the original name in userName,
// Capitalize the first letter in shortName (A.)
// Capitalize the first letter in newName

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);

const USERS_OBJ = USERS.map((user) => {
  return {
    userName: user,
    shortName: `${user[0]}.`,
    newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`,
  };
});

console.log(USERS_OBJ);
