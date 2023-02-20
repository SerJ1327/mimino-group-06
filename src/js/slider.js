
 var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
      },
      loop: true,

      breakpoints: {
        // when window width is >= 414px
        320: {
          slidesPerView: 1,
       
        },
        // when window width is >= 1024px
        480: {
          slidesPerView: 1,
     
        },
        // when window width is >= 1280px
        640: {
          slidesPerView: 1,

        }
      }
  }
);
  

var swiper = new Swiper(".mySwiper_2", {
      slidesPerView: 1,
      spaceBetween: 25,
      freeMode: true,
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
     breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
       },
        // when window width is >= 414px
       414: {
      slidesPerView: 2,
      spaceBetween: 20
       },
    // when window width is >= 480px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
    });
