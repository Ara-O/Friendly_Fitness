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
const backButton = document.querySelector(`.backarrow${currentButton}`);
const frontButton = document.querySelector(`.frontarrow${currentButton}`);

// backButton.addEventListener("click", function () {
//   console.log("lol");
// });

frontButton.addEventListener("click", function () {
  currentComment++;
  console.log(currentComment);
  if (currentComment === 1) {
    console.log("lo");
    comments0.classList.remove("flex");
    comments0.classList.add("hidden");
    comments1.classList.remove("hidden");
    comments1.classList.add("flex");
  }
});

console.log("in");
