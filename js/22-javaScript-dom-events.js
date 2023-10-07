// Working with DOM Events
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

const greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick);

function domClick() {
  console.log("Clicked!");
  this.style.color = this.style.color === "red" ? "black" : "red";
}
