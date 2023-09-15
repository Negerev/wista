"use strict";
import toggleContent from "./modules/toggle-content";
import browserVideo from "./modules/browserVideo";
import linearAnimations from "./modules/linearAnimations";
import graffityCanvas from "./modules/graffityCanvas";
import validation from "./modules/validation";

window.addEventListener("load", () => {

  
  toggleContent(".change", ".visible-mobile .how");
  toggleContent(".token__button", ".token__wrapper");
  
  if (window.innerWidth > 1024) {
    graffityCanvas("#canvas-promo", ".header", ".promo", false);
    graffityCanvas("#canvas-together", ".hidden-mobile .together", ".roadmap", true);
  }

    const swiper = new Swiper('.slider__swiper', {
      slidesPerView: 3,
      spaceBetween: '5%',
      centeredSlides: true,
      loop: true,
      breakpoints: {
        // 577: {
        //   slidesPerView: 3,
        //   spaceBetween: '5%',
        //   // loop: true,
        // }
      }
  
    })
  

    
  swiper.on('slideChange', function () {
      let slideName = "ANIMAL #01"
      if(swiper.realIndex === 0 || swiper.realIndex === 5) {
        slideName = "ANIMAL #01";
      } else if (swiper.realIndex === 1 || swiper.realIndex === 6){
        slideName = "CYBERPUNK #06";
      } else if (swiper.realIndex === 2 || swiper.realIndex === 7){
        slideName = "MASKED #03";
      } else if (swiper.realIndex === 3 || swiper.realIndex === 8){
        slideName = "HIPPIE #05";
      } else if (swiper.realIndex === 4 || swiper.realIndex === 9){
        slideName = "HIPHOP #02";
      }
      document.querySelector('.slider__name').innerHTML=`${slideName}`;
  })
  
  browserVideo();
  linearAnimations();
  validation();
});


// swiper.progress
