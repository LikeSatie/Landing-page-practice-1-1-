'use strict';

const getStartedBtn = document.getElementById('getStartedBtn');
const getStartedModal = document.getElementById('getStartedModal');
const getStartedCloseBtn = document.getElementsByClassName(
  'fa-times-circle'
)[0];
const openSideMenuBtn = document.getElementById('side-menu');
const closeSideMenuBtn = document.getElementById('btn-close');
const responsivNavIcon = document.getElementById('svg-icon-nav');

getStartedBtn.addEventListener('click', openGreetModal);
getStartedCloseBtn.addEventListener('click', closeGreetModal);
window.addEventListener('click', closeGreetModalOutside);

function openGreetModal() {
  getStartedModal.style.display = 'block';
}

function closeGreetModal() {
  getStartedModal.style.display = 'none';
}

function closeGreetModalOutside(e) {
  if (e.target == getStartedModal) {
    getStartedModal.style.display = 'none';
  }
}

function openSideMenu() {
  openSideMenuBtn.style.width = '250px';
  document.getElementById('responsive-menu-container').style.marginLeft =
    '250px';
  responsivNavIcon.style.display = 'none';
  // console.log(314);
}

function closeSideMenu() {
  openSideMenuBtn.style.width = '0';
  document.getElementById('responsive-menu-container').style.width = '0';
  setTimeout(() => {
    responsivNavIcon.style.display = 'initial';
  }, 5);
  // console.log(314);
}
