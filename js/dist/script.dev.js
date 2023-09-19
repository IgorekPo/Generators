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
} // let menuBody = document.querySelector ('.header__menu');
// document.addEventListener ('click' , menu);
// function menu (event){
//     if(event.target.closest('.menu__button')){
//         menuBody.classList.toggle('_active')
//     }
//     if(!event.target.closest('.menu__button')){
//         menuBody.classList.toggle('_active')
//     }
// }