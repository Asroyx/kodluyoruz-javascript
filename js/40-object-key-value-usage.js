// Object Key - Value:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// [key1:1, key2:2, key3:3,]
let laptop1 = {
  brand: "Apple",
  model: "MacBook Pro",
  modelName: "MacBook Pro",
  // model-name: "MacBook Pro",
  model_name: "MacBook Pro",

  "2kg": 2,
};

console.log(laptop1);
// Correct key information usage

console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);
