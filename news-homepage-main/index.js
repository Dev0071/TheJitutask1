const nav = document.querySelector('nav');
const openMenu = document.getElementById('menu-button');
const closeMenu = document.getElementById('close-button');

openMenu.addEventListener('click', () => {
	nav.classList.add('open');
});

closeMenu.addEventListener('click', () => {
	nav.classList.remove('open');
});
