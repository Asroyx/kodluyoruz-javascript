// For Loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// for (initialization; condition; increment) {
//   statements
// }

const users = ["Lorem", "Ipsum", "Dolor"];

// for (let index = 0; index < users.length; index++) {
//   console.log(index);
// }

// let index = 0;
// for (; index < users.length; index++) {
//   console.log(index);
// }

const userListDOM = document.querySelector("#userList");

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM);
}
