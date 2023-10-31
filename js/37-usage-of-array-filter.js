// Usage of filter

// More than 5 letters
const PRODUCTS = [
  "Mic",
  "Cable",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);
console.log(NEW_PRODUCTS);

// Online Users ??
const USERS = [
  { fullName: "Ayse Sumer", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
];

// const ACTIVE_USERS = USERS.filter((user) => user.isActive === true);
const ACTIVE_USERS = USERS.filter((user) => user.isActive);
console.log(ACTIVE_USERS);

// Quiz
const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

// Filter the people array to find individuals older than 30

// Filter the people array to find who know JavaScript
