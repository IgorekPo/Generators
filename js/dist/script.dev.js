"use strict";

var reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
  var swiper = new Swiper('.swiper-reviews', {
    // Optional parameters
    autoHeight: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}