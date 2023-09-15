function linearAnimations () {
  gsap.registerPlugin(ScrollTrigger);

  // let mm = gsap.matchMedia();
  // mm.add({
  //   isMobile: "(max-width: 500px)",
  //   isDesktop: "(min-width: 501px)"
  // }, (context) => {
  //   let { isMobile, isDesktop } = context.conditions;
  // })
  const tlShowFirstScreen = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.out"
      }
    });
  
  tlShowFirstScreen.from(".header__logo img", { opacity: 0, y: -150})
                    .from(".promo__title div:nth-child(1)", { opacity: 0, x: -150}, "<30%")
                    .from(".promo__title div:nth-child(2) span:nth-child(3)", { opacity: 0, x: -150}, "<30%")
                    .from(".promo__title div:nth-child(2) span:nth-child(1)", { opacity: 0, x: -150}, "<30%")
                    .from(".promo__title div:nth-child(3)", { opacity: 0, x: 150}, "<30%")
                    .from(".promo__small-text", { opacity: 0, y: 150}, "<30%")

  
 

gsap.from(".visible-mobile .together__title", {
  scrollTrigger: {
    trigger: ".visible-mobile .together__title",
    start: "top 90%",
    toggleActions: "play none none reverse",
    scrub: true
  },
    duration: .5,
    ease: "power4.out",
    opacity: 0,
    x: -150
  });

  gsap.from(".visible-mobile .together__wrapper", {
    scrollTrigger: {
      trigger: ".visible-mobile .together__title",
      start: "top 90%",
      toggleActions: "play none none reverse",
      scrub: true
    },
      duration: .5,
      ease: "power4.out",
      opacity: 0,
      x: 150
    });


    let mm = gsap.matchMedia();
    mm.add({
      isMobile: "(max-width: 576px)",
      isDesktop: "(min-width: 577px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      const tlHowBlock = gsap.timeline({
        scrollTrigger: {
          trigger: ".how",
          start: "top 90%",
          endTrigger: ".how__list",
          // end: "top center",
          toggleActions: "play none none reverse",
          scrub: true
        },
    });
  
    tlHowBlock.from(".how__title span:nth-child(1)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? -150 : 0}, "<5%")
              .from(".how__title span:nth-child(2)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<5%")
  
    const tlHowList = gsap.timeline({
      scrollTrigger: {
        trigger: ".how__list",
        start: "top bottom",
        duration: 0.5,
        // end: "top 45%",
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
  
    tlHowList.from(".how__list>li:first-child", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0})
              .from(".how__list>li:nth-child(2)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:nth-child(3)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:nth-child(4)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:nth-child(5)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<30%")
              .from(".how__list>li:nth-child(6)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:nth-child(7)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:nth-child(8)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".how__list>li:last-child", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<30%")
    
    gsap.from(".partners__title", {
      scrollTrigger: {
        trigger: isDesktop ? ".partners__wrapper" : ".partners",
        start: "top bottom",
        toggleActions:  "play none none reverse",
        scrub: true
      },
      duration: 0.5,
      ease: "power4.out",
      opacity: 0,
      x: -150
    });
    const tlHowPartners = gsap.timeline({
      scrollTrigger: {
        trigger: isDesktop ? ".partners__wrapper" : ".partners",
        start: isDesktop ? "top 90%" : "top bottom",
        duration: 0.5,
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
    tlHowPartners.from(".partners__item--main", { opacity: 0, y: isDesktop ? 150 : 50, stagger: isDesktop ? "0" : "0.1"}, isDesktop ? "<30%" : "<2%")
    .from(".partners__subtitle", { opacity: 0, y: isDesktop ? 150 : 50}, "<30%")
    .from(".partners__item--sub", { opacity: 0, y: isDesktop ? 150 : 50}, "<30%");

    const tlShowArena = gsap.timeline({
      scrollTrigger: {
        trigger: ".arena",
        start: "top 90%",
        duration: 0.5,
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
    tlShowArena.from(".arena__title", {opacity: 0, x: -150,})
               .from(".arena__text", {opacity: 0, y: isDesktop ? 150 : 50,}, "<30%")
               .from(".arena__img-box", {opacity: 0, y: isDesktop ? 150 : 50,}, "<30%")
               .from(".arena__btn", {opacity: 0, y: isDesktop ? 150 : 50, }, "<30%");

    gsap.from(".upcoming__top", {
    scrollTrigger: {
      trigger: ".upcoming__title",
      start: isDesktop ? "top 90%" : "top bottom",
      toggleActions: "play none none reverse",
      scrub: true
    },
      duration: 0.5,
      ease: "power4.out",
      opacity: 0,
      x: -150
    });
    const tlShowUpcoming = gsap.timeline({
      scrollTrigger: {
        trigger: ".upcoming__text",
        start: isDesktop ? "top 90%" : "top bottom",
        duration: 0.5,
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
    tlShowUpcoming.from(".upcoming__img", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%");

    gsap.from(".slider__title", {
      scrollTrigger: {
        trigger: ".slider__title",
        start: isDesktop ? "top 90%" : "top bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: 0.5,
      ease: "power4.out",
      opacity: 0,
      x: -150
    });
    
    const tlShowSliderContent = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider__text",
        start: isDesktop ? "top 95%" : "top bottom",
        duration: 0.5,
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
    tlShowSliderContent.from(".slider__text p:first-child", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%")
                        .from(".slider__text p:last-child", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%");
    
    gsap.from(".decentr__title", {
      scrollTrigger: {
        trigger: isDesktop ? ".decentr__title" : ".slider",
        start: isDesktop ? "top 90%" : "bottom bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: 0.5,
      ease: "power4.out",
      opacity: 0,
      x: -150
    });
    
    const tlShowDecentrContent = gsap.timeline({
      scrollTrigger: {
        trigger: ".decentr__content",
        start: isDesktop ? "top 90%" : "top bottom",
        duration: 0.5,
        toggleActions: "play none none reverse",
        scrub: true
      },
    });
    tlShowDecentrContent.from(".decentr__img", {opacity: 0, y: isDesktop ? 150 : 0})
                        .from(".decentr__text", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%")
                        .from(".decentr__note", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%");

    gsap.from(".distribute__title", {
      scrollTrigger: {
        trigger: ".distribute__title",
        start: isDesktop ? "top 90%" : "top bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: 0.5,
      ease: "power4.out",
      opacity: 0,
      x: -150
    });
    
    // const tlShowDistributeContent = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".distribute__list",
    //     start: isDesktop ? "top 90%" : "300px bottom",
    //     toggleActions: "play none none reverse",
    //     // scrub: true
    //   },
    // });
    const tlShowDistributeContent = gsap.timeline({
      scrollTrigger: {
        trigger: ".distribute__list",
        start: isDesktop ? "top 90%" : "300px bottom",
        toggleActions: "play none none reverse",
      },
      defaults: {
        ease: 'power4.out',
        duration: 1.5,
      },
    });

    if (isDesktop) {
    tlShowDistributeContent
    .from('.distribute__item', {opacity: 0, stagger: 0.1, onStart: () => {
      gsap.from(".distribute__stroke", {width: 0, stagger: 0.1})
      gsap.from(".distribute__percent span", {textContent: 0,stagger: 0.1, snap: {textContent: 1}})
    }})
    } else {
      gsap.set('.distribute__list', {height: 460})
      tlShowDistributeContent.from(".distribute__stroke", {height: 0, stagger: 0.1, onStart: () => {
        gsap.from('.distribute__item', {opacity: 0, stagger: 0.1})
        gsap.from(".distribute__percent span", {textContent: 0, snap: {textContent: 1}, stagger: 0.1})
      }})
    }
    
  gsap.from(".token__title", {
    scrollTrigger: {
      trigger: ".token__title",
      start: isDesktop ? "top 90%" : "top bottom",
      toggleActions: "play none none reverse",
      scrub: true
    },
    duration: .5,
    ease: "power4.out",
    opacity: 0,
    x: -150
    });
    gsap.from(".token__coin", {
      scrollTrigger: {
        trigger: ".token__title",
        start: isDesktop ? "top 90%" : "top bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: .5,
      ease: "power4.out",
      opacity: 0,
      x: -150
      });
    
    const tlShowTokenContent = gsap.timeline({
      scrollTrigger: {
        trigger: isDesktop ? ".token__descr" : ".token__title",
        start: isDesktop ? "top 95%" : "center bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
      // duration: 0.5
    });
    
    tlShowTokenContent.from(".token__descr", {opacity: 0, y: isDesktop ? 150 : 50})
                        .from(".token__img", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%")
                        .from(".token__button", {opacity: 0, y: isDesktop ? 150 : 50}, "<30%");
    
    const tlTokenList = gsap.timeline({
      scrollTrigger: {
        trigger: ".token__img",
        start: "80% bottom",
        // duration: 2,
        // end: "top center",
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: .5
    });
    
    tlTokenList.from(".token__wrapper>li:first-child", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0})
              .from(".token__wrapper>li:nth-child(2)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".token__wrapper>li:nth-child(3)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".token__wrapper>li:nth-child(4)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".token__wrapper>li:nth-child(5)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<30%")
              .from(".token__wrapper>li:nth-child(6)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0")
              .from(".token__wrapper>li:nth-child(7)", { opacity: isDesktop ? 0 : 1, y: isDesktop ? 150 : 0}, "<0");

    gsap.from(".community__title", {
      scrollTrigger: {
        trigger: ".community__background",
        start: "top 80%",
        toggleActions: "play none none reverse",
        // scrub: true
      },
      duration: .5,
      ease: "power4.out",
      opacity: 0,
      x: -150
      });
    
    const tlShowCommunityContent = gsap.timeline({
      scrollTrigger: {
        trigger: ".community__background",
        start: "top 80%",
        toggleActions: "play none none reverse",
        // scrub: true
      },
      duration: .5,
  
    });
        
    tlShowCommunityContent.from(".community__description", {opacity: isDesktop ? 0 : 1, x: isDesktop ? 150 : 0}, "<0")
                      .from(".community__background img:nth-child(8)", {opacity: 0, x: 250, y: -150}, "<0")
                      .from(".community__background img:nth-child(9)", {opacity: 0, x: 250, y: 50}, "<0")
                      .from(".community__background img:nth-child(10)", {opacity: 0, x: 250, y: 350}, "<0");

    gsap.from(".hidden-mobile .together__title", {
      scrollTrigger: {
        trigger: ".hidden-mobile .together__title",
        start: "top 90%",
        toggleActions: "play none none reverse",
        scrub: true
      },
        duration: .5,
        ease: "power4.out",
        opacity: 0,
        x: -150
      });
    
      gsap.from(".hidden-mobile .together__wrapper", {
        scrollTrigger: {
          trigger: ".hidden-mobile .together__title",
          start: "top 90%",
          toggleActions: "play none none reverse",
          scrub: true
        },
          duration: .5,
          ease: "power4.out",
          opacity: 0,
          y: 150
        });

      gsap.from(".roadmap__title", {
        scrollTrigger: {
          trigger: ".roadmap__con",
          start: "top 98%",
          toggleActions: "play none none reverse",
          scrub: true
        },
          duration: 0.5,
          ease: "power4.out",
          opacity: 0,
          x: -150
      });
    
  
    const tlShowRoadmapContent = gsap.timeline({
      scrollTrigger: {
        trigger: isDesktop ? ".roadmap__background" : ".roadmap__sub",
        start:"top 90%",
        toggleActions: "play none none reverse",
        scrub: true
      },
      ease: "power4.out",
      duration: 0.5
    });
  
    tlShowRoadmapContent.from(".roadmap__background", {opacity: isDesktop ? 0 : 0.5},)
                        .from(".roadmap__item:first-child", {opacity: isDesktop ? 0 : 0.5}, "<15%")
                        .from(".roadmap__item:nth-child(2)", {opacity: isDesktop ? 0 : 0.5}, "<15%")
                        .from(".roadmap__item:nth-child(3)", {opacity: isDesktop ? 0 : 0.5}, "<15%")
                        .from(".roadmap__item:nth-child(4)", {opacity: isDesktop ? 0 : 0.5}, "<15%");
    gsap.from(".team__title", {
      scrollTrigger: {
        trigger: ".team__title",
        start: isDesktop ? "top 90%" : "top bottom",
        toggleActions: "play none none reverse",
        scrub: true
      },
        duration: 0.5,
        ease: "power4.out",
        opacity: 0,
        x: -150
      });
  
    const tlTeamList = gsap.timeline({
      scrollTrigger: {
        trigger: ".team__wrapper",
        start: isDesktop ? "top 90%" : "top bottom",
        scrub: true,
        toggleActions: "play none none reverse",
        scrub: true
      },
      duration: 0.5,
  
    });
      
    tlTeamList.from(".team__wrapper>li:first-child", { y: isDesktop ? 150 : 50}, "<15%")
              .from(".team__wrapper>li:nth-child(2)", {y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(3)", {y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(4)", { y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(5)", {y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(6)", {y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(7)", {y: isDesktop ? 150 : 50}, "<0")
              .from(".team__wrapper>li:nth-child(8)", {y: isDesktop ? 150 : 50}, "<0");    
              
    gsap.from(".feedback__title", {
      scrollTrigger: {
        trigger: ".feedback__title",
        start: isDesktop ? "top 90%" : "top bottom",
        toggleActions: "play none none reverse",
      },
        duration: .5,
        ease: "power4.out",
        opacity: 0,
        x: -150
      });
  
    const tlShowFeedbackContent = gsap.timeline({
      scrollTrigger: {
        trigger: ".feedback__title",
        start: isDesktop ? "top 80%" : "top 90%",
        toggleActions: "play none none reverse",
      },
    });
      
    tlShowFeedbackContent.from(".feedback__descr p:first-child", {opacity: 0, y: isDesktop ? 150 : 50}, "<15%")
                          .from(".feedback__descr p:last-child", {opacity: 0, y: isDesktop ? 150 : 50}, "<15%");

    gsap.from(".feedback__subtitle", {
      scrollTrigger: {
        trigger: ".feedback__audit",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
        duration: .5,
        ease: "power4.out",
        opacity: 0,
        x: -150
    });     
  
    gsap.from(".feedback__round", {
      scrollTrigger: {
        trigger: ".feedback__audit",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
        duration: .5,
        ease: "power4.out",
        opacity: 0,
        x: 150
    });   
    
  const tlShowFooterContent = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer__wrapper",
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  });

  if (isDesktop) {
    tlShowFooterContent.from(".footer__link", {opacity: 0, y: 50, stagger: .1}, "<10%")
                        .from(".footer__item svg", {opacity: 0, y: 50, stagger: .1});
  } else {
    tlShowFooterContent.from(".footer__item svg", {opacity: 0, y: 20, stagger: .1}, "<10%")
                        .from(".footer__link", {opacity: 0, y: 20, stagger: .1});
  }
  

  })
}


          

 
                    
module.exports = linearAnimations;