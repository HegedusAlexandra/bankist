'use strict';

//////////////////
// Modal window //
//////////////////

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

////////////////
// Navigation //
////////////////

/* 

if we add to 1000 element to an event listener it will couse problem so we use delegation and give to the parent

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
}); 

so with e.target we refer to the child and only one eventlistener used

*/

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////
// Creating and inserting elements //
/////////////////////////////////////

const header = document.querySelector('header');
const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved fuctionalty and analytics.';

message.innerHTML =
  'We use cookies for improved fuctionalty and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

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

// document.documentElement.style.setProperty('--color-primary', 'orangered')

//attributes
const logo = document.querySelector('.nav__logo');
logo.alt = 'beatiful minimalist logo';

// setAttribute() -- logo.setAttribute('company','bankist')
// getAttribute() -- console.log(logo.getAttribute('company'));

// absolute version of src -- console.log(logo.src)

// relative version of src -- console.log(logo.getAttribute('src'))

// const link = document.querySelector('.twitter-link') -- use absolute if href needed link.href for full url

/* class manipulation 
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

/* 

h1.onmouseenter = function (e){
alert('awesome')
} 

OR

<h1 onClick="alert('HTML alert')">

*/

/* 

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`; */

// CAPTURING AND BUBBLING

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

////////////////////
// DOM traversing //
////////////////////

/* const h1s = document.querySelector('h1')

// going down
console.log(h1s.querySelectorAll('.highlight'));
console.log(h1s.childNodes);
console.log(h1s.children); //only works for direct children
h1s.firstElementChild.style.color= 'white'

//going up
console.log(h1s.parentNode);
console.log(h1s.parentElement);

// opposite of queryselector, it finds parents
h1.closest('.header').style.background = 'var(--gradient-secondary)'

//siblings
console.log(h1.previousSibling);
console.log(h1.nextSibling);

//all the siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)'
}) */

//////////////////////
// Tabbed component //
//////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  tabs.forEach((t) => t.classList.remove('operations__tab--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  clicked.classList.add('operations__tab--active');  

});
