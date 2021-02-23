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
const backButton1 = document.querySelector(`.backarrow0`);
const backButton2 = document.querySelector(`.backarrow1`);
const backButton3 = document.querySelector(`.backarrow2`);
const frontButton1 = document.querySelector(`.frontarrow0`);
const frontButton2 = document.querySelector(`.frontarrow1`);
const frontButton3 = document.querySelector(`.frontarrow2`);

// backButton.addEventListener("click", function () {
//   console.log("lol");
// });

function toggleChanges(currentComment, nextComment) {
  currentComment.classList.remove("flex");
  currentComment.classList.add("hidden");
  nextComment.classList.remove("hidden");
  nextComment.classList.add("flex");
}

function detoggleChanges(currentComment, backComment) {
  currentComment.classList.add("hidden");
  currentComment.classList.remove("flex");
  backComment.classList.remove("hidden");
  backComment.classList.add("flex");
}

frontButton1.addEventListener("click", function () {
  toggleChanges(comments0, comments1);
  currentComment++;
  currentButton++;
});

frontButton2.addEventListener("click", function () {
  toggleChanges(comments1, comments2);
  frontButton3.style.color = "gray";
  currentComment++;
  currentButton++;
});

backButton2.addEventListener("click", function () {
  detoggleChanges(comments1, comments0);
});

backButton3.addEventListener("click", function () {
  detoggleChanges(comments2, comments1);
});

if (currentComment === 0) {
  backButton1.style.color = "gray";
}
