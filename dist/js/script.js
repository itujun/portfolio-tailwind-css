// NavbarFixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.add('flex');
    toTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
};

// Hamburger
const Hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function () {
  Hamburger.classList.toggle('hamburger-active');
  nav.classList.toggle('hidden');
});

// Klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != Hamburger && e.target != nav) {
    Hamburger.classList.remove('hamburger-active');
    nav.classList.add('hidden');
  }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Dark mode toggle scroll
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
