const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-navigation');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})