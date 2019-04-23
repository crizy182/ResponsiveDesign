console.log('esto sirve de verdad');
console.log(document.querySelector('.menu').classList.add('is-active'));

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
burgerButton.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});
