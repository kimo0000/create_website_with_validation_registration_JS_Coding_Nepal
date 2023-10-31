const loginBtn = document.querySelector("#login");
const loginEl = document.querySelector(".login");
const logoutEl = document.querySelector(".logout");
const closeBtn = document.querySelector(".close");
const closeout = document.querySelector(".logout .close");
const signUp = document.querySelector(".signup");
const signIn = document.querySelector(".signin");
const eyeSlash = document.querySelectorAll(".slash");
const overlay = document.querySelector(".overlay");

console.log(eyeSlash);

// const changetypeInput = (e) => {
//      console.log(e.target.previousElementSibling);
// }

eyeSlash.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    if (!eyeIcon.previousElementSibling.value) return;
    eyeIcon.previousElementSibling.type =
      eyeIcon.previousElementSibling.type === "password" ? "text" : "password";

    eyeIcon.className = `fa-regular fa-eye${
      eyeIcon.previousElementSibling.type === "password" ? "-slash" : ""
    }`;
  });
});

loginBtn.addEventListener("click", () => {
  loginEl.classList.add("show");
  overlay.classList.add("show");
  logoutEl.classList.remove("show");
});
closeBtn.addEventListener("click", () => {
  loginEl.classList.remove("show");
  overlay.classList.remove("show");
});

signUp.addEventListener("click", () => {
  loginEl.classList.remove("show");
  logoutEl.classList.add("show");
});

closeout.addEventListener("click", () => {
  logoutEl.classList.remove("show");
  overlay.classList.remove("show");
});

signIn.addEventListener("click", () => {
  loginEl.classList.add("show");
  logoutEl.classList.remove("show");
});
