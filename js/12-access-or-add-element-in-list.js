// ********** Accessing the last element in a list or adding an element **********

// Access the last element in the list
let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "Last item changed.";

// Access the first element in the list
let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "First item changed.";

// Access the <ul> element
let ulDOM = document.querySelector("ul#list");

// Create a new <li> element
let liDOM = document.createElement("li");
liDOM.innerHTML = "Custom Item Created.";

// Append the new element to the end of the list
// ulDOM.append(liDOM); // Appends to the end
ulDOM.prepend(liDOM); // Prepends to the beginning
