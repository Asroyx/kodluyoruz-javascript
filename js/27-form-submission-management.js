// Form Submit

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  console.log("Process completed");
  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM);
}
