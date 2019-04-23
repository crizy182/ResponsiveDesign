const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(validation);
//se activa boton menu burger para la primera vez que se ingresa
function validation(event) {
  if (event.matches) burgerButton.addEventListener('click', showHide);
  else burgerButton.removeEventListener('click', showHide);
}
validation(ipad);
if (ipad.matches) burgerButton.addEventListener('click', showHide);

function showHide() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
}
