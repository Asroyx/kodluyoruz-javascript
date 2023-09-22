// *****Template Literals Usage **********
// https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan";
const DOMAIN = "kodluyoruz.org";
let email = username + "@" + DOMAIN;

// console.log("Hello",username,"welcome to our website, your email address is:",email);

let info = `
Hello ${username}, welcome to our website.
Your email address: ${email}
Email address length: ${email.length}
Your debt: ${(2 + 3) * 10} TL
Current time of the day: ${new Date().getHours()}
Your short name: ${username.slice(0)}
`;

console.log(info);
