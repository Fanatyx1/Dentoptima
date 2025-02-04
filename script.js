// Script to toggle the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  console.log('Script loaded successfully');
  menu.classList.toggle('active');
});

//animace menu
window.onload = function() {
  const menuLinks = document.querySelectorAll('.menu a');
  
  menuLinks.forEach((link, index) => {
      setTimeout(() => {
          link.classList.add('visible');  
      }, (100 * index));  // Zpoždění mezi jednotlivými odkazy
  });
};

// Zavření menu při kliknutí mimo něj
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    // Kliknutí mimo menu a hamburger tlačítko
    menu.classList.remove('active');
  }
});

