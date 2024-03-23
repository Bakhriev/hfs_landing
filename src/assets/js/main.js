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
		600: {
			targetElement: document.querySelector('.header-bot__container'),
			targetPosition: 3,
		},
	},
});

const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header__nav-mobile');
const menuToggleBurger = menuToggle.querySelector('.burger');
const body = document.body;

menuToggle.addEventListener('click', () => {
	headerNav.classList.toggle('active');
	menuToggle.classList.toggle('active');
	menuToggleBurger.classList.toggle('active');
	body.classList.toggle('disable-scroll');
});
