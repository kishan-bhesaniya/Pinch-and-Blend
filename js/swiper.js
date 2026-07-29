let swiper = new Swiper(".testi-swiper", {
  slidesPerView: 1.8,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1.5,
      spaceBetween: 40,
      centeredSlides: true,
    },
    991: {
      spaceBetween: 50,
    },
    1199: {
      slidesPerView: 1.8,
      spaceBetween: 50,
    },
  },
});

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".collapse").addClass("show");
  });
});
