// ********** Getting User Input with prompt **********
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Please enter your name: ");
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color: red">${fullName}</small>`;
