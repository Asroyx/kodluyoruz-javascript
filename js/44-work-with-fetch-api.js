// Working with fetch api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("data/settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => console.log(responseJson));
