var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    centerSlide:'true',
    fade:'true',
    gragCursor:'true',
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