// Hamburger-Menu
const mobileMenu = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
const sideMenu = document.querySelector('.sidebar-menu');

mobileMenu.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// Register-Login Modal

var registerLoginModal = document.getElementById('registerLogin-Modal');

var loginRegisterBtn = document.getElementById('loginRegister-Btn');

var span = document.getElementsByClassName('close')[0];

loginRegisterBtn.onclick = function () {
  registerLoginModal.style.display = 'block';
};

span.onclick = function () {
  registerLoginModal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == registerLoginModal) {
    registerLoginModal.style.display = 'none';
  }
};

//Slider
var cardSlider = new Swiper('.cardSlider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});

//Dropdown-Autres
const dropdownAutres = document.querySelector('.dropdown-autres');
const autresFilters = document.querySelector('#autres-filters');

autresFilters.addEventListener('click', () => {
  dropdownAutres.classList.toggle('active');
});
