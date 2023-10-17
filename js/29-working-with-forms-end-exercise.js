// WORKING WITH FORMS: End of Chapter Exercise
/*
1: Select the form
2: Add the input data to the UL
3: Clear the data in the form
4: Warn the user if no data is entered in the form
*/

let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
  }
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName}
<span class="badge bg-primary rounded-pill">${score}</span>`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  userListDOM.append(liDOM);
};
