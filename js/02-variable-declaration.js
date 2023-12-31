// Declaring a variable with var

var serverName = "api.kodluyoruz.org";
console.log(serverName);

// Declaring an empty let variable

//let serverName
console.log(serverName);

// Assigning a value to a variable using let

serverName = "https://kodluyoruz.org";
console.log(serverName);

// Define a variable by assigning information to it with let

let password = "1234";
console.log(password);

// Trying to use a variable without assigning a value

console.log(fullName);
// let fullName = "Hakan Yalcinkaya" This will result in an error
var fullName = "Hakan Yalcinkaya"; // This is a correct

// Modifying the value inside a variable defined with 'let'

fullName = "Lorem Ipsum Dolor";
console.log(fullName);

// Concatenation or addition operation

fullName += " Yeni Eklenen Bilgi";
console.log(fullName + " Test Bilgisi");

fullName = fullName + " Yeni Bilgi";
fullName = "2: Bilgi : " + fullName;

fullName = "Sifirlandi";
fullName += " ve Yeni Bilgi Eklendi";
console.log(fullName);

// Attempting to declare a variable as empty using const
// const serverPassword; // It is mandatory to provide an initial value (initializer) for this variable

// Declaring a variable with const
const SERVER_PASSWORD = "pawd23pi355a";
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD = "1234"; Once a value is assigned to a variable declared with 'const,' that value cannot be changed.
// console.log(SERVER_PASSWORD);
