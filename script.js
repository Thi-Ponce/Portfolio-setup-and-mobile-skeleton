const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
 //activate popup1
const open1 = document.getElementById('open1');
const modalContainer1 = document.getElementById('modal1');
const overlay = document.getElementById('overlay');
const close1 = document.getElementById('close1');

open1.addEventListener('click', () => {
  modalContainer1.classList.add('active');
  overlay.classList.add('active');
});

close1.addEventListener('click', () => {
  modalContainer1.classList.remove('active');
  overlay.classList.remove('active');
});
