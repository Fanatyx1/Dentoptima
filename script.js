// Script to toggle the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  console.log('Script loaded successfully');
  menu.classList.toggle('active');
});

