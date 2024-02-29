// =========== navbar settings =============
const menuBtn = document.querySelector(".fa-bars");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("show");
});

window.onscroll = function () {
  navBar.classList.remove("show");
  menuBtn.classList.remove("fa-times");
};
// ========== navbar settings ===============

//================= home transition settings ===============
window.onload = function () {
  const trans = document.querySelectorAll(".transition");
  trans.forEach(function (element) {
    element.classList.add("show");
  });
};
//================= home transition settings ===============

// ================= swiper home page settings =================
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ================= swiper home page settings =================

//================== swiper settings for movies page =================
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  },
});
//================== swiper settings for movies page =================
