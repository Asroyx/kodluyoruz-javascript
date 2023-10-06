// Arrow function Usage
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function hello(name) {
  console.log(`Hello ${name}`);
}

hello("Javascript");

const helloFunctionV1 = (firstName) => {
  console.log(`Hello ${firstName}`);
};

helloFunctionV1("helloFunctionV1");

const helloFunctionV2 = (firstName) => console.log(`Hello ${firstName}`);

helloFunctionV2("helloFunctionV2");

const helloFunctionV3 = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);

helloFunctionV3("helloFunctionV3", "lastName");
