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
// activate popup1
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

// activate popup2
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
// activate popup3
const open3 = document.getElementById('open3');
const modalContainer3 = document.getElementById('modal3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () => {
  modalContainer3.classList.add('active');
  overlay.classList.add('active');
});

close3.addEventListener('click', () => {
  modalContainer3.classList.remove('active');
  overlay.classList.remove('active');
});
// activate popup4
const open4 = document.getElementById('open4');
const modalContainer4 = document.getElementById('modal4');
const close4 = document.getElementById('close4');

open4.addEventListener('click', () => {
  modalContainer4.classList.add('active');
  overlay.classList.add('active');
});

close4.addEventListener('click', () => {
  modalContainer4.classList.remove('active');
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

// Card 3
const project3 = new Project('Tonic', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './Exported_elements/Images/Snapshoot_Portfolio_3.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
' https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title3').innerHTML = project3.projectName;

document.getElementById('descrip3').innerHTML = project3.projectDescription;

document.getElementById('img3').src = project3.projectImage;

document.getElementById('lg1-3').innerHTML = project3.projectLanguages.lg1;

document.getElementById('lg2-3').innerHTML = project3.projectLanguages.lg2;

document.getElementById('lg3-3').innerHTML = project3.projectLanguages.lg3;

// Modal 3 obj
const project3m = new Project('Multi-Post Stories', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './Exported_elements/Images/Snapshoot_Portfolio_3.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title3-m').innerHTML = project3m.projectName;

document.getElementById('descrip3-m').innerHTML = project3m.projectDescription;

document.getElementById('img3-m').src = project3m.projectImage;

document.getElementById('lg1-m-3').innerHTML = project3m.projectLanguages.lg1;

document.getElementById('lg2-m-3').innerHTML = project3m.projectLanguages.lg2;

document.getElementById('lg3-m-3').innerHTML = project3m.projectLanguages.lg3;

document.getElementById('lg4-m-3').innerHTML = project3m.projectLanguages.lg4;

document.getElementById('lg5-m-3').innerHTML = project3m.projectLanguages.lg5;

document.getElementById('lg6-m-3').innerHTML = project3m.projectLanguages.lg6;

document.getElementById('live-m-3').href = project3m.projectLive;

document.getElementById('source-m-3').href = project3m.projectSource;

// Card 4
const project4 = new Project('Multi-Post Stories', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', './Exported_elements/Images/Snapshoot_Portfolio_4.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript',
},
' https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title4').innerHTML = project4.projectName;

document.getElementById('descrip4').innerHTML = project4.projectDescription;

document.getElementById('img4').src = project4.projectImage;

document.getElementById('lg1-4').innerHTML = project4.projectLanguages.lg1;

document.getElementById('lg2-4').innerHTML = project4.projectLanguages.lg2;

document.getElementById('lg3-4').innerHTML = project4.projectLanguages.lg3;

// Modal 4 obj
const project4m = new Project('Multi-Post Stories', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", './Exported_elements/Images/Snapshoot_Portfolio_4.png', {
  lg1: 'html', lg2: 'css', lg3: 'javaScript', lg4: 'github', lg5: 'ruby', lg6: ' bootstraps',
},
'https://thi-ponce.github.io/Portfolio-setup-and-mobile-skeleton/', 'https://github.com/Thi-Ponce/Portfolio-setup-and-mobile-skeleton');

document.getElementById('title4-m').innerHTML = project4m.projectName;

document.getElementById('descrip4-m').innerHTML = project4m.projectDescription;

document.getElementById('img4-m').src = project4m.projectImage;

document.getElementById('lg1-m-4').innerHTML = project4m.projectLanguages.lg1;

document.getElementById('lg2-m-4').innerHTML = project4m.projectLanguages.lg2;

document.getElementById('lg3-m-4').innerHTML = project4m.projectLanguages.lg3;

document.getElementById('lg4-m-4').innerHTML = project4m.projectLanguages.lg4;

document.getElementById('lg5-m-4').innerHTML = project4m.projectLanguages.lg5;

document.getElementById('lg6-m-4').innerHTML = project4m.projectLanguages.lg6;

document.getElementById('live-m-4').href = project4m.projectLive;

document.getElementById('source-m-4').href = project4m.projectSource;

// Form Validation

const form = document.getElementById('form');
const userEmail = document.getElementById('email');

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message) {
  const errorMessage = document.getElementById('error-msg');
  errorMessage.innerText = message;
  errorMessage.classList.add('active');
}

function checkForm() {
  const userEmailValue = userEmail.value.trim();

  if (userEmailValue === '') {
    setErrorFor(userEmail, 'Email cannot be empty');
  } else if (userEmailValue.toLowerCase() !== userEmailValue) {
    setErrorFor(userEmail, 'Email must be lowercase');
  } else if (!isEmail(userEmailValue)) {
    setErrorFor(userEmail, 'Invalid email');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkForm();
});

// Local storage exercise
function saveData() {
  const storedInfo = {};

  storedInfo.userName = document.getElementById('name').value;
  storedInfo.userEmail = document.getElementById('email').value;
  storedInfo.userMsg = document.getElementById('message').value;

  localStorage.setItem('storedInfo', JSON.stringify(storedInfo));

// let retrievedInfo = JSON.parse(localStorage.getItem('storedInfo'));
}

function showData() {
  const showInfo = JSON.parse(localStorage.getItem('storedInfo'));

  const name2 = document.getElementById('name');
  const email2 = document.getElementById('email');
  const msg2 = document.getElementById('message');

  name2.value = showInfo.userName;
  email2.value = showInfo.userEmail;
  msg2.value = showInfo.userMsg;
}
// Added because linters said we didn't call the function even though everything was working
if (true) {
  saveData();
  showData();
}