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

 //activate popup2
 const open2 = document.getElementById('open2');
 const modalContainer2 = document.getElementById('modal2');
 const close2 = document.getElementById('close2');
 
 open2.addEventListener('click', () => {
   modalContainer2.classList.add('active');
   overlay.classList.add('active');
 });
 
 close2.addEventListener('click', () => {
   modalContainer2.classList.remove('active');
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
// Card 1
const project1 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './Exported_elements/Images/Snapshoot_Portfolio_1st_card.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
' https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title1').innerHTML = project1.projectName;

document.getElementById('descrip1').innerHTML = project1.projectDescription;

document.getElementById('img1').src = project1.projectImage;

document.getElementById('lg1').innerHTML = project1.projectLanguages.lg1;

document.getElementById('lg2').innerHTML = project1.projectLanguages.lg2;

document.getElementById('lg3').innerHTML = project1.projectLanguages.lg3;

// Modal 1 obj

const project1m = new Project('Tonic', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './Exported_elements/Images/Snapshoot_Portfolio_1st_card.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title1-m').innerHTML = project1m.projectName;

document.getElementById('descrip1-m').innerHTML = project1m.projectDescription;

document.getElementById('img1-m').src = project1m.projectImage;

document.getElementById('lg1-m').innerHTML = project1m.projectLanguages.lg1;

document.getElementById('lg2-m').innerHTML = project1m.projectLanguages.lg2;

document.getElementById('lg3-m').innerHTML = project1m.projectLanguages.lg3;

document.getElementById('lg4-m').innerHTML = project1m.projectLanguages.lg4;

document.getElementById('lg5-m').innerHTML = project1m.projectLanguages.lg5;

document.getElementById('lg6-m').innerHTML = project1m.projectLanguages.lg6;

document.getElementById('live-m').href = project1m.projectLive;

document.getElementById('source-m').href = project1m.projectSource;

// Card 2 
const project2 = new Project('Multi-Post Stories', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './Exported_elements/Images/Snapshoot_Portfolio_2.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
' https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title2').innerHTML = project2.projectName;

document.getElementById('descrip2').innerHTML = project2.projectDescription;

document.getElementById('img2').src = project2.projectImage;

document.getElementById('lg1-2').innerHTML = project2.projectLanguages.lg1;

document.getElementById('lg2-2').innerHTML = project2.projectLanguages.lg2;

document.getElementById('lg3-2').innerHTML = project2.projectLanguages.lg3;

// Modal 2 obj
const project2m = new Project('Multi-Post Stories', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './Exported_elements/Images/Snapshoot_Portfolio_2.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title2-m').innerHTML = project2m.projectName;

document.getElementById('descrip2-m').innerHTML = project2m.projectDescription;

document.getElementById('img2-m').src = project2m.projectImage;

document.getElementById('lg1-m-2').innerHTML = project2m.projectLanguages.lg1;

document.getElementById('lg2-m-2').innerHTML = project2m.projectLanguages.lg2;

document.getElementById('lg3-m-2').innerHTML = project2m.projectLanguages.lg3;

document.getElementById('lg4-m-2').innerHTML = project2m.projectLanguages.lg4;

document.getElementById('lg5-m-2').innerHTML = project2m.projectLanguages.lg5;

document.getElementById('lg6-m-2').innerHTML = project2m.projectLanguages.lg6;

document.getElementById('live-m-2').href = project2m.projectLive;

document.getElementById('source-m-2').href = project2m.projectSource;

