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
