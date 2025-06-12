document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      speed: 3000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
      freeMode: true,
      breakpoints: {
         0: {
            slidesPerView: 1
         },
         376: {
            slidesPerView: 3
         }
      }
   });

   const swiperPost = new Swiper('.swiperPost', {
      slidesPerView: 3,
      spaceBetween: 5,
      loop: true,
      centeredSlides: true,
      speed: 3000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
      freeMode: true,
      breakpoints: {
         0: {
            slidesPerView: 1
         },
         376: {
            slidesPerView: 4
         }
      }
   });
   const swiperGrid = new Swiper('.cardsGrid', {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      navigation: false,
   });
   document.querySelectorAll('.scroll-to-form').forEach(btn => {
   btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (window.innerWidth <= 375) {
      document.getElementById('form-mobile').scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('form-pc').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
});