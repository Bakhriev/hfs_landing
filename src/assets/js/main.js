const menuItems = document.querySelectorAll('.menu-item-has-children');

menuItems.forEach(item => {
	const menu = item.querySelector('.menu');
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
});

new TransferElements({
	sourceElement: document.getElementById('header-cart'),
	breakpoints: {
		575: {
			targetElement: document.querySelector('.header-bot__container'),
			targetPosition: 3,
		},
	},
});

const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.mobile-nav');
const menuToggleBurger = menuToggle.querySelector('.burger');
const body = document.body;

menuToggle.addEventListener('click', () => {
	headerNav.classList.toggle('active');
	menuToggle.classList.toggle('active');
	menuToggleBurger.classList.toggle('active');
});

const menuMobileItems = document.querySelectorAll('.menu-mobile-item');

menuMobileItems.forEach(item => {
	const toggle = item.querySelector('.menu-mobile-item__toggle');
	const subMenu = item.querySelector('.menu-mobile-item__submenu');
	toggle.addEventListener('click', () => {
		if (!subMenu.style.maxHeight) {
			subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
		} else {
			subMenu.style.maxHeight = '';
		}
	});
});
