"use strict";

const hamburgerEl = document.querySelector(".hamburgermenu");
const overlayEl = document.querySelector(".overlay");
const cancelEl = document.querySelector(".cancelbutton");
const bodyEl = document.querySelector("body");

hamburgerEl.addEventListener("click", function () {
  overlayEl.classList.remove("hidden");
  overlayEl.classList.add("animation");
  //   bodyEl.style.scroll = "no";
  bodyEl.style.overflow = "hidden";
});

cancelEl.addEventListener("click", function () {
  overlayEl.classList.add("hidden");
  bodyEl.style.overflow = "auto";
});

let currentComment = 0;
let currentButton = 0;

const comments0 = document.querySelector(".firsttheme");
const comments1 = document.querySelector(".secondtheme");
const comments2 = document.querySelector(".thirdtheme");

// backButton.addEventListener("click", function () {
//   console.log("lol");
// });
