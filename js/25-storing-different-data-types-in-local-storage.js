// Local Storage Operations:

let user = {
  userName: "asilayz",
  isActive: true,
};

localStorage.setItem("userInfo", user);

let userInfo = localStorage.getItem("userInfo");
console.log(userInfo);
