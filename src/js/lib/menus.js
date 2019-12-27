const selectActiveItems = () => {
  const menus = document.querySelectorAll('.menu__list');

  menus.forEach(menu => {
    const parentSection = menu.closest('section');

    const activeItem = parentSection.querySelector(
      `[data-item-parent="${parentSection.id}"]`
    );

    activeItem.classList.add('menu__item--isActive');
  });
};

const handleMenu = () => {
  const hamburgerButton = document.querySelector('#hamburger');
  const menuWrapper = document.querySelector('.js-menu__list');
  hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--isActive');
    menuWrapper.classList.toggle('menu__list--isActive');
  });
};

const initMenu = () => {
  selectActiveItems();
  handleMenu();
};

module.exports = initMenu;
