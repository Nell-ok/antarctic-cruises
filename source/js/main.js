const pageBody = document.querySelector('.page__body');
const pageHeader = document.querySelector('.page-header');
const pageLogo = document.querySelector('.page-header__logo');
const mainNav = document.querySelector('.main-nav--header');
const linkNav = document.querySelectorAll('.main-nav__link--header');
const pageMain = document.querySelector('.page-main');
const navButton = document.querySelector('.main-nav__toggle');

const isElements = pageHeader && pageLogo && linkNav && pageMain && navButton;

const activateScript = () => {
  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.add('main-nav--closed');
  pageMain.classList.add('page-main--js');
  pageLogo.classList.add('page-header__logo--closed-nav');
};

const openMenu = () => {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  pageLogo.classList.remove('page-header__logo--closed-nav');
  pageHeader.classList.add('page-header--opened-nav');
  pageBody.classList.add('page__body--hidden');
};

const closeMenu = () => {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
  pageLogo.classList.add('page-header__logo--closed-nav');
  pageHeader.classList.remove('page-header--opened-nav');
  pageBody.classList.remove('page__body--hidden');
};

const onClick = (element) => {
  element.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

const sortArray = () => {
  linkNav.forEach((link) => {
    onClick(link);
  });
};

if (isElements) {
  activateScript();
  onClick(navButton);
  sortArray();
} else {
  mainNav.classList.add('main-nav--nojs');
}
