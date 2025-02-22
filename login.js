// addEventListener("DOMContentLoaded", () => {
const signbtn = document.getElementById("user-signup");
let loginpageback = document.querySelector(".user-signup");
let loginpage = document.querySelector(".login");
let signupPage = document.querySelector(".signup");
let inputlofin = document.querySelector(".login-input-section");
let mainLogin = document.querySelector(".main-input-feild");
let logBtn = document.getElementById("login-but");
let sinmainPage = document.querySelector(".main-input-signup");
let signWith = document.querySelector(".signup-input-section");
// let signInpfeild = document.querySelector(".main-input-signup");
let loginMain = document.querySelector(".login-context");
let mpassword = "";
let mUsername = "";
// let logMainInp = document.querySelector(".main-input-feild");
// let
// let signupPage = document.querySelector(".signup-input-section")
// });
function openSignup() {
  //   signbtn.addEventListener("click", () => {
  //   console.log("umesh");
  //   signbtn.style.transform = "rotate(45deg)";
  loginpage.style.backgroundColor = "transparent";
  signupPage.style.backgroundColor = "white";

  inputlofin.style.display = "none";
  mainLogin.style.display = "none";
  // logBtn.style.alignSelf = "center";
  // logBtn.style.top = "170px";
  logBtn.style.backgroundColor = "white";
  logBtn.style.color = "black";
  sinmainPage.style.display = "block";
  signWith.style.display = "block";
  signbtn.style.backgroundColor = "black";
  document.querySelector("#user-signup p").style.color = "white";
  // signbtn.style.color = "white";
  //   });
}

function openLogin() {
  sinmainPage.style.display = "none";
  signWith.style.display = "none";
  signupPage.style.backgroundColor = "transparent";
  // loginpageback.style.top = "100px";
  loginpage.style.backgroundColor = "white";
  // mainLogin.style.backgroundColor = "white";
  mainLogin.style.display = "block";
  // console.log("umesh");
  logBtn.style.backgroundColor = "black";
  logBtn.style.color = "white";
  signbtn.style.backgroundColor = "white";
  // signbtn.style.color = "black";
  document.querySelector("#user-signup p").style.color = "black";
  inputlofin.style.display = "block";
  // document.querySelector("#user-signup p").style.color = "white";
}
signbtn.addEventListener("click", () => {
  const sinPassword = document.querySelector("#password-sin");
  const sinUsername = document.querySelector("#username-sin");
  const Username1 = document.querySelector("#username");
  const Password1 = document.querySelector("#password");
  var Username2 = sinUsername.value.trim();
  var password2 = sinPassword.value.trim();
  if (Username2 === "" || password2 === "") {
    if (
      (Username2 === "" && !(password2 === "")) ||
      (!(Username2 === "") && password2 === "")
    ) {
      alert("Please both password and useername");
      sinPassword.value = "";
      sinUsername.value = "";
      Password1.value = "";
      Username1.value = "";
    } else {
      // Username2.value = "";
      // password2.value = "";
      openSignup();
      sinPassword.value = "";
      sinUsername.value = "";
      Password1.value = "";
      Username1.value = "";
    }
  } else {
    mpassword = password2;
    mUsername = Username2;
    alert("Sucessfully signup Able to login");
    sinPassword.value = "";
    sinUsername.value = "";
    Password1.value = "";
    Username1.value = "";
  }
});

// document.addEventListener("DOMContentLoaded", function () {
logBtn.addEventListener("click", () => {
  // if (logPassword === "" && logUsername === "") {
  const Username1 = document.querySelector("#username");
  const Password1 = document.querySelector("#password");
  const valueusernamelogin = Username1.value.trim();
  const valuePasswordLogin = Password1.value.trim();
  const sinPassword = document.querySelector("#password-sin");
  const sinUsername = document.querySelector("#username-sin");
  // console.log(valuePasswordLogin, valueusernamelogin);
  if (valuePasswordLogin === "" || valueusernamelogin === "") {
    if (
      (valueusernamelogin === "" && !(valuePasswordLogin === "")) ||
      (!(valueusernamelogin === "") && valuePasswordLogin === "")
    ) {
      alert("Please enter both password and username for login");
      Password1.value = "";
      Username1.value = "";
      sinPassword.value = "";
      sinUsername.value = "";
      // Username2.value = "";
    } else {
      openLogin();
      // Username2.value = "";
      Password1.value = "";
      Username1.value = "";
      sinPassword.value = "";
      sinUsername.value = "";
    }
  } else {
    if (valuePasswordLogin === mpassword && valueusernamelogin === mUsername) {
      // Username2.value = "";
      Username1.value = "";
      Password1.value = "";
      sinPassword.value = "";
      sinUsername.value = "";
      // alert("login sucess");
      // confirm("this is somethinf");
      document.querySelector("#login-but p").style.display = "none";
      let loader = document.querySelector("#login-but .container");
      loader.style.display = "block";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else {
      alert("Please enter right password and username");
    }
  }
  //   } else {
  //   }
});
// });
