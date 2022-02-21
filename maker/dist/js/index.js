"use strict";

function checkSupportWebp() {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      return callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) document.querySelector("body").classList.add("webp");else document.querySelector("body").classList.add("no-webp");
  });
}

checkSupportWebp();

function setStatusMenu() {
  document.querySelector(".menu-burger").classList.toggle("menu-burger_actived");
  document.querySelector(".menu").classList.toggle("menu_actived");
  document.querySelector("body").classList.toggle("no-scroll");
}

document.querySelector(".menu-burger").onclick = function () {
  setStatusMenu();
};

document.querySelectorAll(".menu__link").forEach(function (element) {
  element.addEventListener("click", function () {
    if (getComputedStyle(document.querySelector(".menu-burger")).display != "none") setStatusMenu();
  });
});
document.querySelectorAll(".slowScroll").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    var href = this.getAttribute("href").substring(1);
    var scrollTarget = document.getElementById(href);
    var elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});

function popupListener() {
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector(".popup-video").classList.toggle("popup-video_actived");
  var src = document.querySelector(".popup-video__iframe").getAttribute("src");

  if (!document.querySelector(".popup-video").classList.contains("popup-video_actived")) {
    document.querySelector(".popup-video__iframe").setAttribute("src", src);
  }
}

document.querySelector(".popup-video__button").onclick = function () {
  popupListener();
};

document.querySelector(".popup-video__close-button").onclick = function () {
  popupListener();
};