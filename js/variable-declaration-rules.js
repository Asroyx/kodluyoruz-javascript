// ********** Variable Declaration Rules *****
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

// ### General Variable Declaration Rules
// camelCase Usage:

let fullname = ""; // This is not correct usage
let kodluyoruzserverinfo = ""; // This is not correct usage
let kodluyoruz_server_info = ""; // This is not correct usage
let fullName = "";
let kodluyoruzServerInfo = "";
let kodluyoruzSERverInfo = ""; // This is not correct usage

// let firstName = "Hakan", lastName = "Yalcinkaya"
let firstName = "Hakan";
let lastName = "Yalcinkaya";
console.log(firstName, lastName);

// UPPER_CASE Usage:
const password = "1234"; // This is not correct usage
const PASSWORD = "1234";
const SERVER_PASSWORD = "1234";

// Usage of turkish and other languages in variables
let türkçeBilgi = "Türkçe Bilgi Yazdırılıyor"; // This is not correct usage
// let turkceBilgi, wrong usage
let info = "Türkçe Bilgi Yazdırılıyor";
let infoTurkish = "Türkçe Bilgi Yazdırılıyor";
let infoJapanase = "日本語情報";
console.log(infoJapanase);

// Do not use meaningless variable names!
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When I wrote this, only God and I understood what I was doing
// Now, God only knows

let x = 1; // This is not correct usage

// Do not use meaningless variable names like x, y, z, k, i, e, etc.!

// #### Additional Information:
// 1: use is/has when defining booleans:
let isActive = true;
let hasPassword = false;
// 2: Line Length < 80
