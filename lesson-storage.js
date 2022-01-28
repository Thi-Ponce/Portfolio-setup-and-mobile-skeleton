window.onload = function storeData() {
  let dataStored = {};

  const userEmail = document.getElementById('email');
  const userName = document.getElementById('name');
  const userMsg = document.getElementById('message');

  userEmail.addEventListener('change', (event) => {    
    dataStored = { ...dataStored, userEmail: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  userName.addEventListener('change', (event) => {    
    dataStored = { ...dataStored, userName: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  userMsg.addEventListener('change', (event) => {
    dataStored = { ...dataStored, userMsg: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });
  
  if (localStorage.getItem('dataStored')) {
    dataStored = JSON.parse(localStorage.getItem('dataStored'));

    userEmail.value = dataStored.userEmail;
    userName.value = dataStored.userName;
    userMsg.value = dataStored.userMsg;
  }

}
