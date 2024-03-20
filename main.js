const colors = [
  '#FF5733', // Coral
  '#FFBD33', // Saffron
  '#33FF57', // Neon Green
  '#337AFF', // Blueberry
  '#FF337A', // Fuchsia
  '#FF33E9', // Pink
  '#33FFFF', // Cyan
  '#FF5733', // Orange
  '#FFD700', // Gold
  '#FF00FF', // Magenta
  '#00FF00', // Lime
  '#FFFF00', // Yellow
];

let currentIndex = 0; // Índice del color actual
const colorDiv = document.getElementById('colorDiv');

  inputText.addEventListener('input', function() {
    // Incrementar el índice para obtener el próximo color del array
    colorDiv.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;

  });
