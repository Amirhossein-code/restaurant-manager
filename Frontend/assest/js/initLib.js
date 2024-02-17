// wow library init
new WOW().init();

//swiper library init
var swiper = new Swiper(".swiper", {
  slidesPerView: 4.5,
  spaceBetween: 10,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  gragCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
console.log("init lib file linked successfully")