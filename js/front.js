
// var videoSlider = new Swiper('.video-slider', {
//   direction: 'horizontal',
//   loop: false,
//   navigation: {
//     nextEl: '.video-slider-button-next',
//     prevEl: '.video-slider-button-prev',
//   },
//   on: {
//     transitionStart: function() {
//       var videos = document.querySelectorAll('video');
//       videos.forEach(function(video) {
//         video.pause();
//       });
//     },
//     transitionEnd: function() {
//       var activeIndex = this.activeIndex;
//       var activeSlide = this.slides[activeIndex];
//       var activeSlideVideo = activeSlide.querySelector('video');
//       if (activeSlideVideo) {
//         activeSlideVideo.play();
//       }
//     }
//   }
// });









  document.addEventListener("DOMContentLoaded", function() {
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





  document.addEventListener('DOMContentLoaded', () => {
    var videoSlider = new Swiper('.video-slider', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.video-slider-button-next',
        prevEl: '.video-slider-button-prev',
      },
      on: {
        transitionStart: function() {
          var videos = document.querySelectorAll('video');
          videos.forEach(function(video) {
            video.pause();
          });
        },
        transitionEnd: function() {
          var activeIndex = this.activeIndex;
          var activeSlide = this.slides[activeIndex];
          var activeSlideVideo = activeSlide.querySelector('video');
          if (activeSlideVideo) {
            activeSlideVideo.play();
          }
        }
      }
    });

    document.getElementById('play-video-button').addEventListener('click', function() {
      var activeIndex = videoSlider.activeIndex;
      var activeSlide = videoSlider.slides[activeIndex];
      var activeSlideVideo = activeSlide.querySelector('video');
      if (activeSlideVideo) {
        activeSlideVideo.play();
      }
      this.classList.add('hidden');
    });
  });





  document.addEventListener("DOMContentLoaded", function() {
    const videoBlocks = document.querySelectorAll(".video-block");

    videoBlocks.forEach(block => {
        const playButton = block.querySelector(".play-button");
        const video = block.querySelector(".video-mobile");

        playButton.addEventListener("click", function() {
            // Запустить видео
            video.play().then(() => {
                // Скрыть кнопку после начала воспроизведения
                playButton.classList.add("hidden");
            }).catch(error => {
                console.error("Error attempting to play the video:", error);
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
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

















// страница портфолио
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('portfolio-hero__video-button');
  const thumbnail = document.querySelector('.portfolio-hero__video-thumbnail');
  const video = document.querySelector('.video');

  button.addEventListener('click', function() {
      thumbnail.classList.add('hidden');
      button.classList.add('hidden');
      video.classList.add('visible'); // предположим, что класс 'visible' делает видео видимым
      video.play();
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.portfolio-hero__slider', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    freeModeSticky: false, // Убедитесь, что это значение false
    slidesPerView: 6,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    speed: 1000,
    
    navigation: {
      nextEl: '.portfolio__slider-button-next',
      prevEl: '.portfolio__slider-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      2560: {
        slidesPerView: 6, // Установите количество слайдов для разрешения 2560px
      },
      1660: {
        slidesPerView: 5,
      },
      1440: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 4,
      },
      1099: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 4,
      },
      676: {
        slidesPerView: 3,
      },
      567: {
        slidesPerView: 3,
      },
      467: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2, // Установите количество слайдов для начального разрешения
      },
    }

  });
});











// страница услуг
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.services-cta__slider', {
    direction: 'horizontal',
    
    slidesPerView: 1,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: '.services-cta__button-next',
      prevEl: '.services-cta__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const ServicesPriceSlider = document.querySelector('.services-price-slider');
  const ServicesPriceSliderNav = document.querySelector('.services-price-nav');

  let ServicesPriceNav = new Swiper(ServicesPriceSliderNav, {
    slidesPerView: 'auto',
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
    breakpoints: {
      2560: {
        direction: 'vertical',
      },
      1920: {
        direction: 'vertical',
      },
      1660: {
        direction: 'vertical',
      },
      1440: {
        direction: 'vertical',
      },
      1380: {
        direction: 'vertical',
      },
      1280: {
        direction: 'vertical',
      },
      1199: {
        direction: 'vertical',
      },
      1099: {
        direction: 'horizontal',
        slidesPerView: 5,
        freeMode: true,
        freeModeSticky: false, // Убедитесь, что это значение false
        loop: false,
       
      },
      991: {
        direction: 'horizontal',
      },
      767: {
        direction: 'horizontal',
      },
      676: {
        direction: 'horizontal',
      },
      567: {
        direction: 'horizontal',
      },
      467: {
        direction: 'horizontal',
      },
      390: {
        direction: 'horizontal',

      },
      0: {
        direction: 'horizontal',
      },

    },
  });

  let ServicesPrice = new Swiper(ServicesPriceSlider, {
    spaceBetween: 10,
    speed: 500,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: ServicesPriceNav,
    },
  });

  // Add click event to the navigation slides
  ServicesPriceNav.slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      ServicesPrice.slideToLoop(index);
    });
  });

  // Update active class for navigation slides when the main slider changes
  ServicesPrice.on('slideChange', () => {
    const activeIndex = ServicesPrice.realIndex;
    ServicesPriceNav.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
    ServicesPriceNav.slides[activeIndex].classList.add('swiper-slide-active');
  });

  // Synchronize main slider with navigation slider changes
  ServicesPriceNav.on('slideChange', () => {
    const activeIndex = ServicesPriceNav.realIndex;
    ServicesPrice.slideToLoop(activeIndex);
  });

});







// страница услуг 2
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.services-style__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 32,
    speed: 500,
    navigation: {
      nextEl: '.services-style__button-next',
      prevEl: '.services-style__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function() {
        updateClasses({
          $el: document.querySelector('.services-style__slider'),
          slides: document.querySelectorAll('.services-style__slider .swiper-slide'),
          activeIndex: swiper.activeIndex
        });
      }
    }
  });

  function updateClasses({ $el, slides, activeIndex }) {
    // Удаляем класс 'swiper-slide-prev-prev' у всех элементов
    Array.from($el.querySelectorAll('.swiper-slide-prev-prev')).forEach(function(element) {
      element.classList.remove('swiper-slide-prev-prev');
    });

    // Добавляем класс 'swiper-slide-prev-prev' к нужному элементу
    if (slides[activeIndex - 2]) {
      slides[activeIndex - 2].classList.add('swiper-slide-prev-prev');
    }

    // Удаляем класс 'swiper-slide-next-next' у всех элементов
    Array.from($el.querySelectorAll('.swiper-slide-next-next')).forEach(function(element) {
      element.classList.remove('swiper-slide-next-next');
    });

    // Добавляем класс 'swiper-slide-next-next' к нужному элементу
    if (slides[activeIndex + 2]) {
      slides[activeIndex + 2].classList.add('swiper-slide-next-next');
    }
  }

  // Инициализируем классы при загрузке
  updateClasses({
    $el: document.querySelector('.services-style__slider'),
    slides: document.querySelectorAll('.services-style__slider .swiper-slide'),
    activeIndex: swiper.activeIndex
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.services-reviews__slider', {
    direction: 'horizontal',
    
    slidesPerView: 1,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: '.services-reviews__button-next',
      prevEl: '.services-reviews__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    
  });
});













// страница о нас

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.about-photo__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: '.about-photo__button-next',
      prevEl: '.about-photo__button-prev',
    },
    pagination: {
      el: '.about-photo__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + ' page-' + (index + 1) + '">' + (index + 1 ).toString().padStart(2, '0') + '</div>';
      },
    },
    on: {
      slideChange: function () {
        updatePagination();
      },
    },
  });

  function updatePagination() {
    const bullets = document.querySelectorAll('.about-photo__pagination div');
    bullets.forEach((bullet, index) => {
      if (index === swiper.activeIndex) {
        bullet.classList.add('swiper-pagination-active');
      } else {
        bullet.classList.remove('swiper-pagination-active');
      }
    });
  }

  // Инициализируем пагинацию на старте
  updatePagination();
});












// страница свадебные идеи
document.addEventListener('DOMContentLoaded', function() {
  const ideas = document.querySelectorAll('.idea');
  const prevButton = document.querySelector('.pagination__button:first-child');
  const nextButton = document.querySelector('.pagination__button:last-child');
  const pagesContainer = document.querySelector('.pagination__pages');
  const section = document.querySelector('.ideas'); // Убедитесь, что у вас есть элемент с классом "ideas"
  let currentIndex = 0;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(ideas.length / itemsPerPage);

  function updateIdeas() {
      ideas.forEach((idea, index) => {
          idea.style.display = (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) ? 'flex' : 'none';
      });
      updatePagination();
  }

  function createPageButton(pageNumber, isActive = false) {
      const pageElement = document.createElement('span');
      pageElement.textContent = pageNumber;
      pageElement.className = 'pagination__page-number';
      if (isActive) {
          pageElement.classList.add('active');
      }
      pageElement.addEventListener('click', () => {
          currentIndex = pageNumber - 1;
          updateIdeas();
          section.scrollIntoView({ behavior: 'smooth' });
      });
      return pageElement;
  }

  function updatePagination() {
      pagesContainer.innerHTML = ''; // Очищаем контейнер

      if (totalPages <= 1) return;

      const firstPage = createPageButton(1, currentIndex === 0);
      pagesContainer.appendChild(firstPage);

      if (currentIndex < 3) {
          for (let i = 2; i <= Math.min(3, totalPages - 1); i++) {
              const page = createPageButton(i, currentIndex === i - 1);
              pagesContainer.appendChild(page);
          }
          if (totalPages > 4) {
              const dots = document.createElement('span');
              dots.textContent = '...';
              dots.className = 'pagination__dots';
              pagesContainer.appendChild(dots);
          }
      } else if (currentIndex >= totalPages - 3) {
          const dots = document.createElement('span');
          dots.textContent = '...';
          dots.className = 'pagination__dots';
          pagesContainer.appendChild(dots);

          for (let i = totalPages - 3; i <= totalPages - 1; i++) {
              const page = createPageButton(i, currentIndex === i - 1);
              pagesContainer.appendChild(page);
          }
      } else {
          const dots1 = document.createElement('span');
          dots1.textContent = '...';
          dots1.className = 'pagination__dots';
          pagesContainer.appendChild(dots1);

          for (let i = currentIndex; i <= currentIndex + 2; i++) {
              const page = createPageButton(i + 1, currentIndex === i);
              pagesContainer.appendChild(page);
          }

          const dots2 = document.createElement('span');
          dots2.textContent = '...';
          dots2.className = 'pagination__dots';
          pagesContainer.appendChild(dots2);
      }

      const lastPage = createPageButton(totalPages, currentIndex === totalPages - 1);
      pagesContainer.appendChild(lastPage);
  }

  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateIdeas();
          section.scrollIntoView({ behavior: 'smooth' });
      }
  });

  nextButton.addEventListener('click', function() {
      if ((currentIndex + 1) * itemsPerPage < ideas.length) {
          currentIndex++;
          updateIdeas();
          section.scrollIntoView({ behavior: 'smooth' });
      }
  });

  updateIdeas();
});






document.addEventListener('DOMContentLoaded', function() {
  // Найдите все элементы с классом 'idea__slider'
  var sliders = document.querySelectorAll('.idea__slider');

  // Инициализируйте каждый слайдер
  sliders.forEach(function(slider, index) {
      new Swiper(slider, {
          loop: true,
          pagination: {
              el: slider.querySelector('.swiper-pagination'),
              clickable: true,
          },
          navigation: {
              nextEl: slider.querySelector('.idea__slider-button-next'),
              prevEl: slider.querySelector('.idea__slider-button-prev'),
          },
      });
  });
});


























// страница отзывы
document.addEventListener('DOMContentLoaded', function() {
  const reviews = document.querySelectorAll('.review');
  const prevButton = document.querySelector('.pagination__button:first-child');
  const nextButton = document.querySelector('.pagination__button:last-child');
  const pagesContainer = document.querySelector('.pagination__pages');
  const section = document.querySelector('.reviews-inner'); // Убедитесь, что у вас есть элемент с классом "reviews"
  let currentIndex = 0;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  function updateReviews() {
      reviews.forEach((review, index) => {
          review.style.display = (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) ? 'flex' : 'none';
      });
      updatePagination();
  }

  function createPageButton(pageNumber, isActive = false) {
      const pageElement = document.createElement('span');
      pageElement.textContent = pageNumber;
      pageElement.className = 'pagination__page-number';
      if (isActive) {
          pageElement.classList.add('active');
      }
      pageElement.addEventListener('click', () => {
          currentIndex = pageNumber - 1;
          updateReviews();
          section.scrollIntoView({ behavior: 'smooth' });
      });
      return pageElement;
  }

  function updatePagination() {
      pagesContainer.innerHTML = ''; // Очищаем контейнер

      if (totalPages <= 1) return;

      const firstPage = createPageButton(1, currentIndex === 0);
      pagesContainer.appendChild(firstPage);

      if (currentIndex < 3) {
          for (let i = 2; i <= Math.min(3, totalPages - 1); i++) {
              const page = createPageButton(i, currentIndex === i - 1);
              pagesContainer.appendChild(page);
          }
          if (totalPages > 4) {
              const dots = document.createElement('span');
              dots.textContent = '...';
              dots.className = 'pagination__dots';
              pagesContainer.appendChild(dots);
          }
      } else if (currentIndex >= totalPages - 3) {
          const dots = document.createElement('span');
          dots.textContent = '...';
          dots.className = 'pagination__dots';
          pagesContainer.appendChild(dots);

          for (let i = totalPages - 3; i <= totalPages - 1; i++) {
              const page = createPageButton(i, currentIndex === i - 1);
              pagesContainer.appendChild(page);
          }
      } else {
          const dots1 = document.createElement('span');
          dots1.textContent = '...';
          dots1.className = 'pagination__dots';
          pagesContainer.appendChild(dots1);

          for (let i = currentIndex; i <= currentIndex + 2; i++) {
              const page = createPageButton(i + 1, currentIndex === i);
              pagesContainer.appendChild(page);
          }

          const dots2 = document.createElement('span');
          dots2.textContent = '...';
          dots2.className = 'pagination__dots';
          pagesContainer.appendChild(dots2);
      }

      const lastPage = createPageButton(totalPages, currentIndex === totalPages - 1);
      pagesContainer.appendChild(lastPage);
  }

  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateReviews();
          section.scrollIntoView({ behavior: 'smooth' });
      }
  });

  nextButton.addEventListener('click', function() {
      if ((currentIndex + 1) * itemsPerPage < reviews.length) {
          currentIndex++;
          updateReviews();
          section.scrollIntoView({ behavior: 'smooth' });
      }
  });

  updateReviews();
});






document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth < 1199) {
    var swiper = new Swiper('.services-tabs__slider', {
      // Optional parameters
      slidesPerView: 5,
      
      freeMode: true,
      freeModeSticky: false, // Убедитесь, что это значение false
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        2560: {
          slidesPerView: 6, // Установите количество слайдов для разрешения 2560px
        },
        1660: {
          slidesPerView: 5,
        },
        1440: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 4,
        },
        1099: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 3,
        },
        676: {
          slidesPerView: 3,
        },
        567: {
          slidesPerView: 2,
        },
        467: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2, // Установите количество слайдов для начального разрешения
        },
      },
    });
  }
});




















// lightbox









// service-portfolio slider
document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.services-portfolio__slider', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 224,
      loop: false,
      navigation: {
        nextEl: '.services-portfolio__slider-button-next',
        prevEl: '.services-portfolio__slider-button-prev',
      },
      on: {
          init: function() {
              createCustomPagination(this);
          },
          slideChange: function() {
              updateCustomPagination(this);
          }
      }
  });

  function createCustomPagination(swiper) {
      var paginationContainer = document.querySelector('.services-portfolio__slider-pagination');
      for (var i = 0; i < swiper.slides.length; i++) {
          var bullet = document.createElement('div');
          bullet.classList.add('services-portfolio__slider-pagination__bullet');
          bullet.setAttribute('data-index', i);
          bullet.addEventListener('click', function() {
              var index = parseInt(this.getAttribute('data-index'));
              swiper.slideTo(index + 1);
          });
          paginationContainer.appendChild(bullet);
      }
      updateCustomPagination(swiper);
  }

  function updateCustomPagination(swiper) {
      var bullets = document.querySelectorAll('.services-portfolio__slider-pagination__bullet');
      bullets.forEach(function(bullet, index) {
          bullet.classList.remove('services-portfolio__slider-pagination__bullet-active');
          if (index === swiper.realIndex) {
              bullet.classList.add('services-portfolio__slider-pagination__bullet-active');
          }
      });
  }
});