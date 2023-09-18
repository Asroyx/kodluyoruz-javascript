// ********** number **********
// Defining the number data type:

let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Price:",
  price,
  "KDV Rate:",
  tax,
  "KDV Amount:",
  priceTax,
  "Total Price:",
  total
);

// Increment and decrement operations:

let counter = 320;
counter = counter + 1; // long way
counter += 1;
counter++;
console.log(counter);

counter--;
counter = 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// Operator precedence:
// https://en.wikipedia.org/wiki/Order_of_operations

console.log(2 + 3 * 10); // 32 ???????????
console.log((2 + 3) * 10); // 50 ???????????

// Finding the remainder using mod % operator:
// Is the number even or odd?
console.log(17 % 2); // If it's 0, it's even; if it's 1, it's odd.
