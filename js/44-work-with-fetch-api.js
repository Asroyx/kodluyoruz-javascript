// Working with fetch api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Fetch data from the settings.json file
fetch("data/settings.json")
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

// Fetch data from the API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach((item) => {
      console.log(item);
    });
  });
