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
  event.defaultPrevent();
}
