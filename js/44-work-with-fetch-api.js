// Working with fetch api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Fetch data from the settings.json file
fetch("data/settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

let userListDOM = document.querySelector("#userList");

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach((item) => {
      let liDOM = document.createElement("li");
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    });
  });
