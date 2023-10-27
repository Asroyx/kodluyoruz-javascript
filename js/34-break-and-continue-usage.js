// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
];

let counter = 0;

for (; counter < 10; counter++) {
  console.log(counter);
  if (counter === 5) {
    break;
  }
}
console.log(counter);
