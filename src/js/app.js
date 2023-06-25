"use strict";

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const bannerEl = document.querySelector(".banner");
const navWrapper = document.querySelector(".nav-wrapper");

const navlistLinks = document.querySelectorAll(".nav-list__link");
const navSublist = document.querySelector(".nav-sublist");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

hamburger.addEventListener("click", function () {
  navWrapper.classList.add("show");
  bannerEl.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  navWrapper.classList.remove("show");
  bannerEl.classList.remove("active");
});

navlistLinks.forEach((link) => {
  link.addEventListener("click", function () {
    link.parentElement.lastElementChild.classList.toggle("active");
    link.parentElement.firstElementChild.firstElementChild.classList.toggle(
      "hide"
    );
    link.parentElement.firstElementChild.lastElementChild.classList.toggle(
      "show"
    );
  });
});
