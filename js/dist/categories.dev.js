"use strict";

var mainInfo = document.querySelectorAll('.categori__block');
mainInfo.forEach(function (buttonEvent) {
  buttonEvent.addEventListener('click', function (event) {
    if (event.target.closest('.categori__image')) {
      buttonEvent.classList.toggle('_active');
    }

    if (!event.target.closest('.categori__image')) {
      buttonEvent.classList.remove('_active');
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.categori__image')) {
      buttonEvent.classList.remove('_active');
    }
  });
});
var mainCategories = document.querySelectorAll('.menu__item-button');
mainCategories.forEach(function (buttonCategori) {
  buttonCategori.addEventListener('click', function (event) {
    if (event.target.closest('.menu__item-button')) {
      buttonCategori.classList.toggle('_showcategori');
    }

    if (!event.target.closest('.menu__item-button')) {
      buttonCategori.classList.remove('_showcategori');
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.menu__item-button')) {
      buttonCategori.classList.remove('_showcategori');
    }
  });
});