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
