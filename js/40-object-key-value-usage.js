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

// Adding a new value to the key information
laptop1.brand = "Mac";
laptop1["brand"] = "Mac";
console.log(laptop1);

// Adding a new information
laptop1.version = "10.15.7";
console.log(laptop1);

// Access to key information(keys) -> Object.key(item)
keys = Object.keys(laptop1);
console.log(keys);

keys.forEach((keyInfo) => {
  console.log(keyInfo);
  console.log(laptop1[keyInfo]);
});

// Access to value information(values) -> Object.values(item)
console.log(Object.values(laptop1));

let values = Object.values(laptop1);

values.forEach((value) => {
  console.log("value: ", value);
});

let setting = {
  password: 1234,
  userName: "user1",
};
