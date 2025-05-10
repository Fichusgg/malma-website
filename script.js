const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

function updateCarousel() {
  currentIndex = (currentIndex + 1) % images.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(updateCarousel, 5000); // every 5 seconds
