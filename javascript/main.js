// Carrusel
const slider = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider-inner img');
const totalImages = images.length;
let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 500}px)`;
}

document.getElementById('next-btn').addEventListener('click', () => {
  index = (index + 1) % totalImages;
  updateSlider();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateSlider();
});

setInterval(() => {
  index = (index + 1) % totalImages;
  updateSlider();
}, 5000);

// Menú Hamburguesa
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
