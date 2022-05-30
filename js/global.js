let menu = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  if (menu.classList.contains('main-nav__list_open')) {
    menu.classList.remove('main-nav__list_open');
    menu.classList.add('main-nav__list_close');
  }
    else {
      menu.classList.remove('main-nav__list_close');
      menu.classList.add('main-nav__list_open');
    }
  });
