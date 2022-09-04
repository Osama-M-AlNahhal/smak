// for making selecting DOM nodes easier, rather than writing document.querySelector each time
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);



/* ----------------------------------------------------
				navbar functionality
-----------------------------------------------------*/

const hamburgerIcon = $('.hamburger-icon');
const navbarLinks = $('.navbar-links-ul');

hamburgerIcon.addEventListener('click', ()=>{
	navbarLinks.classList.toggle('expand');
})