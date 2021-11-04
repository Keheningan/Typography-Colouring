() => {
  const hamburgerBtn = document.querySelector('.hamburger-btn'),
    navMenu = document.querySelector('.nav-menu'),
    closeNavBtn = navMenu.querySelector('.close-nav-menu');
  hamburgerBtn.addEventListener('Click', showNavMenu);
  closeNavBtn.addEventListener('Click', hideNavMenu);
  function showNavMenu() {
    navMenu.classList.add('open');
  }
  function hideNavMenu() {
    navMenu.classList.remove('open');
  }
  function fadeOutEffect() {
    document.querySelector('.fade-out-effect').addList.add('active');
    setTimeout(() => {
      document.querySelector('.fade-out-effect').addList.remove('active');
    }, 300);
  }
};
(() => {
  const sliderContainer = document.querySelector('.testi-slider-container'),
    slides = sliderContainer.querySelectorAll('.testi-item');
  (slideWidth = sliderContainer.offsetWidth), (pervBtn = document.querySelector('.testi-slider-nav .prev')), (nextBtn = document.querySelector('.testi-slider-nav .next'));
  let slideIndex = 0;

  //   set width of all slides
  slides.forEach((slide) => {
    slide.style.width = slideWidth + 'px';
  });
  //   set width of sliderContainer
  sliderContainer.style.width = slideWidth * slides.length + 'px';

  nextBtn.addEventListener('click', () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + 'px';
  });
})();

(() => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((sections) => {
    if (!sections.classList.contains('active')) {
      section.classList.add('hide');
    }
  });
})();
