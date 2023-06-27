
const swiper = new Swiper('#wheel-slider', {
  effect: 'coverflow', // Kind of slider effect
  centeredSlides: true, // Force centered slide
  slidesPerView: 5, // auto = the slide itself defined the viewport of the slider
  allowTouchMove: true, // Allows more control options except Slide Next and Slide Prev
  speed: 1000, // Speed of the change animation
  loop: false, // Looping the slides
  mousewheel: true, // control the slider with mousewheel
  navigation: {
    nextEl: '.next', // Class for the Next Slide Button
    prevEl: '.prev', // Class for the Previous Slide Button
  },
  coverflowEffect: { // Properties for the coverflow effect
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
}) 