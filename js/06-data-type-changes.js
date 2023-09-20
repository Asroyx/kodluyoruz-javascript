// ********** Discovering Data Types and Data Type Conversions **********
// Learning data types using typeof:
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
    "price: ",
    typeof(price)
);
console.log(
    "stringPrice: ",
    typeof(stringPrice)
);
console.log(
    "hasPassword: ",
    typeof(hasPassword)
);

// Converting string information to int and float:

let number1 = "11";
number1 = parseInt(number1);
console.log("number1: ", number1, typeof(number1));

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2: ", number2, typeof(number2));

let number3 = "11.1";
number3 = Number(number3);
console.log("number3: ", number3, typeof(number3));

let number4 = "11.4px";
number4 = parseFloat(number4);
console.log("number4: ", number4, typeof(number4));
