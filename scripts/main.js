'use strict';

const getStartedBtn = document.getElementById('getStartedBtn');
const getStartedModal = document.getElementById('getStartedModal');
const getStartedCloseBtn = document.getElementsByClassName(
  'fa-times-circle'
)[0];
const openSlideMenuBtn = document.getElementById('side-menu');
const closeSideMenuBtn = document.getElementById('btn-close');

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

function openSlideMenu() {
  openSlideMenuBtn.style.width = '250px';
  document.getElementById('responsive-menu-container').style.marginLeft =
    '250px';
  // console.log(314);
}

function closeSideMenu() {
  closeSideMenuBtn.style.width = '0';
  document.getElementById('responsive-menu-container').style.marginLeft = '0';
  // console.log(314);
}
