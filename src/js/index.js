'use strict';

let menu = document.querySelector('.menu-section');
document.querySelector('.info-bars').onclick = function() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}