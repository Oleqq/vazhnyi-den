




const swiper = new Swiper('.portfolio__slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 220,
	speed: 1000,
	navigation: {
	  nextEl: '.portfolio__slider-button-next',
	  prevEl: '.portfolio__slider-button-prev',
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	// autoplay: {
	//   delay: 5000,
	//   disableOnInteraction: false,
	// },
  });



  const PriceSlider = document.querySelector('.slider-services');
  const PriceSliderNav = document.querySelector('.slider-services-nav');
  
  let mySwiperNav = new Swiper(PriceSliderNav, {
	  slidesPerView: 6,
	  
	  speed: 500,
	  watchSlidesVisibility: true,
	  watchSlidesProgress: true,
	  direction: 'vertical',
	  pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
	  },
	  navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
	  },
  });
  
  let mySwiper = new Swiper(PriceSlider, {
	  spaceBetween: 10,
	  speed: 500,
	  pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
	  },
	  navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
	  },
	  thumbs: {
		  swiper: mySwiperNav,
	  },
  });
  
  // Add click event to the navigation slides
  mySwiperNav.slides.forEach((slide, index) => {
	  slide.addEventListener('click', () => {
		  mySwiper.slideToLoop(index);
	  });
  });
  
  // Update active class for navigation slides when the main slider changes
  mySwiper.on('slideChange', () => {
	  const activeIndex = mySwiper.realIndex;
	  mySwiperNav.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
	  mySwiperNav.slides[activeIndex].classList.add('swiper-slide-active');
  });
  
  // Synchronize main slider with navigation slider changes
  mySwiperNav.on('slideChange', () => {
	  const activeIndex = mySwiperNav.realIndex;
	  mySwiper.slideToLoop(activeIndex);
  });
  











  document.addEventListener('DOMContentLoaded', () => {
    const TeamSlider = document.querySelector('.team-slider');
    const TeamSliderDescription = document.querySelector('.team-description-slider');
    const TeamSliderNav = document.querySelector('.team-nav-slider');

    let myTeamSwiperNav = new Swiper(TeamSliderNav, {
      slidesPerView: 3,
      spaceBetween: 60,
      speed: 500,
      
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
      pagination: {
        el: '.team-nav-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '',
        prevEl: '',
      },

      breakpoints: {
        2560: {

        },
        1660: {

        },
        1440: {
         spaceBetween: 68,
         slidesPerView: 4,
        },
        1280: {
          spaceBetween: 60,
          slidesPerView: 3,
        },
        1099: {

        },
        991: {
          spaceBetween: 45,
        },
        800: {
          spaceBetween: 35,
        },
        700: {
          spaceBetween: 20,
        },
        567: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        },
      },
    });

    let myTeamSwiperDescription = new Swiper(TeamSliderDescription, {
      spaceBetween: 10,
      slidesPerView: 1,
      speed: 500,
      // effect: 'coverflow',
      allowTouchMove: false,
      pagination: {
        el: '.team-description-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '',
        prevEl: '',
      },
    });

    let myTeamSwiper = new Swiper(TeamSlider, {
      spaceBetween: 10,
      slidesPerView: 1,
      effect: 'coverflow',
      speed: 500,
      pagination: {
        el: '.team-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.team-slider__button-next',
        prevEl: '.team-slider__button-prev',
      },
      thumbs: {
        swiper: myTeamSwiperNav,
      },
    });

    // Add click event to the navigation slides
    myTeamSwiperNav.slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        myTeamSwiper.slideToLoop(index);
        myTeamSwiperDescription.slideToLoop(index);
      });
    });

    // Update active class for navigation slides when the main slider changes
    myTeamSwiper.on('slideChange', () => {
      const activeIndex = myTeamSwiper.realIndex;
      myTeamSwiperNav.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
      myTeamSwiperNav.slides[activeIndex].classList.add('swiper-slide-active');
      myTeamSwiperDescription.slideToLoop(activeIndex);
    });

    // Synchronize main slider with navigation slider changes
    myTeamSwiperNav.on('slideChange', () => {
      const activeIndex = myTeamSwiperNav.realIndex;
      myTeamSwiper.slideToLoop(activeIndex);
      myTeamSwiperDescription.slideToLoop(activeIndex);
    });

    // Synchronize main slider with description slider changes
    myTeamSwiperDescription.on('slideChange', () => {
      const activeIndex = myTeamSwiperDescription.realIndex;
      myTeamSwiper.slideToLoop(activeIndex);
      myTeamSwiperNav.slideToLoop(activeIndex);
    });
  });



















  const ReviewsSwiper = new Swiper('.reviews__slider', {
	direction: 'horizontal',
	
	spaceBetween: 32,
	speed: 700,
    slidesPerView: 4,
	navigation: {
	  nextEl: '.reviews__slider-button-next',
	  prevEl: '.reviews__slider-button-prev',
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

    breakpoints: {
        1660: {
            spaceBetween: 32,
            slidesPerView: 4,
        },
        1440: {
            spaceBetween: 16,
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 4,
        },
        1099: {
            slidesPerView: 4,  
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        767: {
            slidesPerView: 3,
        },
        567: {
            slidesPerView: 2,
        },
        467: {
            slidesPerView: 2,
        },
        390: {
            slidesPerView: 1,

            loop: true,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            spaceBetween: -100,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 800,
                modifier: 1,
                slideShadows: false
            },

        },
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
    },

	// autoplay: {
	//   delay: 5000,
	//   disableOnInteraction: false,
	// },
  });






  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.fixed-menu ul li');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });
});



























document.addEventListener('DOMContentLoaded', function() {
	const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay');

const lockScroll = () => {
    document.body.classList.add('lock');
    overlay.classList.add('open'); // Добавляем класс open к overlay
}

const unlockScroll = () => {
    document.body.classList.remove('lock');
    overlay.classList.remove('open'); // Удаляем класс open с overlay
}

const initialMenu = () => {
    document.querySelector('.nav__list--dropdown').classList.remove('transformation');
    document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
}

const scrollTop = () => {
    menu.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

const closeMenu = () => {
    menu.classList.remove('open');
    unlockScroll();
}

burger.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращение всплытия события
    if (menu.classList.contains('open')) {
        closeMenu();
    } else {
        menu.classList.add('open');
        lockScroll();
        initialMenu();
    }
});

overlay.addEventListener('click', (e) => {
    closeMenu();
});

menu.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращение всплытия события
    if (e.target.classList.contains('nav__link--drop')) {
        e.preventDefault();
        e.target.closest('.nav__list').classList.add('transformation');
        e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
        scrollTop();
    }

    if (e.target.classList.contains('mobile-back__link')) {
        e.preventDefault();
        e.target.closest('.nav__list--dropdown').classList.remove('transformation');
        e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
        scrollTop();
    }

    if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
        e.preventDefault();
        closeMenu();
    }
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target) && !overlay.contains(e.target)) {
        closeMenu();
    }
});



});


