"use strict";

const getStartedBtn = document.getElementById("getStartedBtn");
const getStartedModal = document.getElementById("getStartedModal");
const getStartedCloseBtn = document.getElementsByClassName(
  "fa-times-circle"
)[0];

getStartedBtn.addEventListener("click", openGreetModal);
getStartedCloseBtn.addEventListener("click", closeGreetModal);
window.addEventListener("click", closeGreetModalOutside);

function openGreetModal() {
  getStartedModal.style.display = "block";
}

function closeGreetModal() {
  getStartedModal.style.display = "none";
}

function closeGreetModalOutside() {
  getStartedModal.style.display = "none";
}
