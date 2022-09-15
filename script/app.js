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
});


/* ----------------------------------------------------
				services functionality
-----------------------------------------------------*/

/* ----------------------------------------------------
				works functionality
-----------------------------------------------------*/

const closeWorksShowcaseIcon = $('.close-showcase');
const worksShowcase = $('.work-showcase');
const filters = $$('.filter');

closeWorksShowcaseIcon.addEventListener('click', () => {
	worksShowcase.classList.add('showcase-hidden');
})

// for (int i = 0; i < filters.length; i++) {
// 	filters[i].addEventListener('click', selectThisFilter(	));
// }

// function selectThisFilter(filter) {
// 	filter.classList.add('selected');
// 	filterWorks(filter);
// }

// function filterWorks(filter) {
// 	//handle filtering
// 	//request data from the database and store it into an array
// 	//
// }

