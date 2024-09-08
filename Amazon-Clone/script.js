const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalCards = cards.length;
const visibleCards = 3; // Show 3 cards at once
let cardWidth = cards[0].offsetWidth + 20; // Add margin-right

// Initial setting of carousel width to allow looping
carousel.style.width = `${cardWidth * totalCards}px`;

function updateCarouselPosition() {
  const offset = -(currentIndex * cardWidth);
  carousel.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarouselPosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarouselPosition();
});

// Responsive card width adjustment
window.addEventListener('resize', () => {
  cardWidth = cards[0].offsetWidth + 20;
  updateCarouselPosition();
});
