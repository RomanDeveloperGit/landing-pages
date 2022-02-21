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

function popupListener() {
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector(".popup-video").classList.toggle("popup-video_actived");
  var src = document.querySelector(".popup-video__iframe").getAttribute("src");

  if (!document.querySelector(".popup-video").classList.contains("popup-video_actived")) {
    document.querySelector(".popup-video__iframe").setAttribute("src", src);
  }
}

document.querySelector(".popup-video__button").addEventListener("click", function () {
  popupListener();
});
document.querySelector(".popup-video__close-button").addEventListener("click", function () {
  popupListener();
});