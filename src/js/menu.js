import menuTemplate from '../templates/menu-cards.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('ul.js-menu');

const menuListItemsMarkup = menuTemplate(menu);

menuList.insertAdjacentHTML('beforeend', menuListItemsMarkup);

export default {menuList, menuListItemsMarkup };