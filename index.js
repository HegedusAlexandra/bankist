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
/*header.prepend(message);
 header.append(message); */
/* header.append(message.cloneNode(true)); */
header.after(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = '#37383d';
message.style.width = '100%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

/* document.documentElement.style.setProperty('--color-primary', 'orangered') */

//attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'beatiful minimalist logo';
/* 
logo.setAttribute('company','bankist')
console.log(logo.getAttribute('company'));

// absolute version of src

console.log(logo.src)

// relative version of src

console.log(logo.getAttribute('src'))

const link = document.querySelector('.twitter-link')

// use absolute if href needed link.href for full url

logo.classList.add()
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()

// never use classname = because overwright all

logo.className = 'logo'
 */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// element.getBoundingClientRect() --- gives the position of the element relative to the viewport borders
// window.scrollX , scrollY --- current scrollposition
// document.documentElement.clientHeight --- visible height of the viewport (also works with width)

btnScrollTo.addEventListener('click', e => {
  /*   
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  }); 
*/

  section1.scrollIntoView({ behavior: 'smooth' });
});

// events : https://html.spec.whatwg.org/multipage/indices.html#events-2
// events : https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener: Great!');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

/* h1.onmouseenter = function (e){
alert('awesome')

OR

<h1 onClick="alert('HTML alert')">
} */

/* const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`; */

// CAPTURING ANDF BUBBLING

/* document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //e.stopPropagination()
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },

  // if set to true is fired in the CAPTURING phase not the BUBBLING

  true
); */
