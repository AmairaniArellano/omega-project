const slider = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider-inner img');
const totalImages = images.length;

let index = 0;

// Función para actualizar el carrusel
function updateSlider() {
  slider.style.transform = `translateX(-${index * 500}px)`;
}

// Botón para avanzar
document.getElementById('next-btn').addEventListener('click', () => {
  index = (index + 1) % totalImages; // Reinicia al llegar al final
  updateSlider();
});

// Botón para retroceder
document.getElementById('prev-btn').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages; // Ir al último al retroceder desde el primero
  updateSlider();
});

// Desplazamiento automático
setInterval(() => {
  index = (index + 1) % totalImages;
  updateSlider();
}, 5000); // Pausa de 5 segundos

//Carrusel