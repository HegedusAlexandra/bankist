'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//creating and inserting elements
const header = document.querySelector('header');
const message = document.createElement('div'); 
message.classList.add('cookie-message');
/* message.textContent = 'We use cookies for improved fuctionalty and analytics.'; */
message.innerHTML =
  'We use cookies for improved fuctionalty and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
/* header.append(message); */
/* header.append(message.cloneNode(true)); */
header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

/* document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'beatiful minimalist logo'; */
