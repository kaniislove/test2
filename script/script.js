// 첫번째 슬라이드
var swiper = new Swiper(".mySwiper.slide1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".slide1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide1 .swiper-button-next",
    prevEl: ".slide1 .swiper-button-prev",
  },
});


// 두번째 슬라이드
var swiper = new Swiper(".mySwiper.ac_img_box", {
  slidesPerView:5,
  spaceBetween: 0,
  });