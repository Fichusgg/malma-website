// JavaScript to handle the carousel rotation

const track = document.querySelector('.carousel-track');
const totalImages = document.querySelectorAll('.carousel-image').length;
let currentIndex = 0;

function rotateCarousel() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

setInterval(rotateCarousel, 5000); // Rotate every 5 seconds
