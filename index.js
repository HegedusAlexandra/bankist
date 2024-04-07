'use strict';

//////////////////
// Modal window //
//////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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
    if (id === '/welcome.html') window.location.href = '/welcome.html';
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

/* const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener: Great!');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
 */
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

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  clicked.classList.add('operations__tab--active');
});

/////////////////////////
// Menu fade animation //
/////////////////////////

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////
// Sticky Navigation  ///
/////////////////////////
/*
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function () {
  // if (initialCoords.top < window.scrollY) { 
  if (0 < window.scrollY) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}); */

/////////////////////////////////
// Intersection Observer API  ///
/////////////////////////////////

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

// whenever the target element enters viewport with 10% the callback is called

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////////////////////
// Reveal Section  ///
//////////////////////

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//////////////////
// Lazy Image  ///
//////////////////

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////
/// Slider  ///
///////////////
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  const createDots = function () {
    slides.forEach((_, i) =>
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide="${i}"></button>`
      )
    );
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsd and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/* window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = 'message'
}); */
