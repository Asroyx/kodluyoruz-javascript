// Array forEach Method
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);

console.log(PRODUCTS);
