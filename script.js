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

// create the js object
function Project(name, description, image, languages, live, source) {
  this.projectName = name;
  this.projectDescription = description;
  this.projectImage = image;
  this.projectLanguages = languages;
  this.projectLive = live;
  this.projectSource = source;
}

const project1 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './Exported_elements/Images/Snapshoot_Portfolio_1st_card.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
'https://yersel500.github.io/portfolio/', 'https://github.com/yersel500/portfolio');

document.getElementById('title1').innerHTML = project1.projectName;

document.getElementById('descrip1').innerHTML = project1.projectDescription;

document.getElementById('img1').src = project1.projectImage;

document.getElementById('lg1').innerHTML = project1.projectLanguages.lg1;

document.getElementById('lg2').innerHTML = project1.projectLanguages.lg2;

document.getElementById('lg3').innerHTML = project1.projectLanguages.lg3;
