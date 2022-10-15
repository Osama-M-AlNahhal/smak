$(document).ready(function(){

	let windowWidth = $(window).innerWidth(),
	windowHeight = $(window).height();
	
	let navbar__height = $(".navbar").height();
		hero__height = $(".hero-section").height();


/* ----------------------------------------------------
				global functionality
-----------------------------------------------------*/


	function getContainerWidth() {
		let width = 0;
		if (windowWidth < 600) {
			width = windowWidth;
		} else if (windowWidth < 768) {
			width = 550;
		} else if (windowWidth < 1200) {
			width = 750;
		} else {
			width = 900;
		}
		return width;
	}

	let containerPadding = (windowWidth - getContainerWidth()) / 2; 
	
	
	$(window).on("resize", function(){
		windowWidth = $(this).width();
		windowHeight = $(this).height();	
		navbar__height = $(".navbar").height();
		hero__height = $(".hero-section").height();
		containerPadding = (windowWidth - getContainerWidth()) / 2
	});

	//get the width of the scroll bar
	//this is for removing small horizontal scrollbar when a block is full bleed
	let scrollbarWidth = window.innerWidth - document.body.clientWidth;
	let halfScrollbarWidth = scrollbarWidth / 2;
	document.body.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);
	document.body.style.setProperty('--halfScrollbarWidth', `${halfScrollbarWidth}px`);
	document.body.style.setProperty('--menu-width', $(window).width()+"px");

/* ----------------------------------------------------
				navbar functionality
-----------------------------------------------------*/

	let hamburgerIcon = $('.hamburger-icon');
	let navbarLinksList = $('.navbar-links-ul');
	let navbarLinks = $(".navbar-links-ul li a");

	if (windowWidth < 768) {

	}
	$("nav").delay(300).animate({
		top:0
	}, {duration:400});

	//current link is highlighted at the start
	let needsLetterSpacing = false,
		hasLetterSpacing = false;
	
	if (windowWidth < 768) {
		$(".navbar a.current").css({
			letterSpacing:"1.5rem"
		});
		hasLetterSpacing = true;
	}
	$(window).on("resize", function(){
		if (windowWidth > 768 && hasLetterSpacing == false) {
			needsLetterSpacing = true;
		} else if (windowWidth > 768 && hasLetterSpacing == true) {
			needsLetterSpacing = false;
		}

		if (needsLetterSpacing == true) {
			$(".navbar a.current").css("letter-spacing", "1.5rem");
			hasLetterSpacing = true;
		}
	});
	

	


	//set the width of the ul to the width of the view port
	//set the right margin of the ul to - the above value
	navbarLinksList.css({
		width:"100vw",
		// (containerPadding + windowWidth - scrollbarWidth)
		right: "-" + (containerPadding + windowWidth - scrollbarWidth) + "px"
	});

	//toggle menu
	hamburgerIcon.on("click", function(){
		if (navbarLinksList.hasClass("hidden")) {
			navbarLinksList.removeClass("hidden");
		}
		navbarLinksList.toggleClass('expand');
		if (navbarLinksList.hasClass("expand")) {
			navbarLinksList.animate({
				right:"-" + containerPadding + "px"
			});
		} else {
			navbarLinksList.animate({
				right:"-" + (containerPadding + windowWidth - scrollbarWidth) + "px"
			});
		}
	});

	//select sections
	navbarLinksList.children("li").children("a").each(function(){
		$(this).on("click", function(){
			if (!$(this).hasClass("current")) {
				navbarLinks.removeClass("current");
				navbarLinks.animate({
					letterSpacing:0
				}, {duration:400, queue:false});
				$(this).addClass("current");
				$(this).animate({
					letterSpacing: "1rem",
				}, {duration:400, queue:false});
				navbarLinksList.animate({
					right:"-" + (containerPadding + windowWidth - scrollbarWidth) + "px"
				}, 400, function(){
					navbarLinksList.removeClass("expand");
				});

			}
			
			
		});
		if (windowWidth >= 768) {
			navbarLinks.css({
				right:0
			}).removeClass("hidden");
		}
	})

	


/* ----------------------------------------------------
				hero functionality
-----------------------------------------------------*/

	let heroContainer = $(".hero-container"),
		heroBgStrip = $(".hero-bg-strip"),
		heroSlogan = $(".hero-container .slogan"),
		heroBuyBtn = $(".hero-container .buy-btn"),
		moveDownBtn = $(".hero-container .move-down-btn");

	$(heroBgStrip).css({
			right:"-"+$(window).width()+"px",
			opacity:0,
			visibility:"visible"
		}).animate({right:0,}, {duration:600, queue:false})
			.animate({opacity:100}, {duration:500, queue:false});

	heroSlogan.slideDown(300);
	heroBuyBtn.css({
			left:"-"+$(window).width()+"px",
			opacity:0,
			visibility:"visible"
		}).animate({left:0,}, {duration:600, queue:false})
			.animate({opacity:100}, {duration:500, queue:false});


	moveDownBtn.css({
		bottom:"-"+moveDownBtn.height()*2 + "px",
		opacity:0
	}).delay(200).animate({bottom:0,}, {duration:500, queue:false})
		.animate({opacity:100}, {duration:500, queue:false});

/* ----------------------------------------------------
				services functionality
-----------------------------------------------------*/

/* ----------------------------------------------------
				works functionality
-----------------------------------------------------*/

const closeWorksShowcaseIcon = $('.close-showcase');
const worksShowcase = $('.work-showcase');
const filters = $('.filter');

closeWorksShowcaseIcon.on('click', () => {
	worksShowcase.addClass('showcase-hidden');
});

// for (int i = 0; i < filters.length; i++) {
// 	filters[i].on('click', selectThisFilter(	));
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

/* ----------------------------------------------------
			like-our-porfolio functionality
-----------------------------------------------------*/





/* ----------------------------------------------------
					numbers
-----------------------------------------------------*/

/* ----------------------------------------------------
					About us
-----------------------------------------------------*/

/* ----------------------------------------------------
					The team
-----------------------------------------------------*/


	let membersDescriptions = [{name:"JOHN DOE", description:"A", facebook:"a", twitter:"a"},{name:"JOHN DOE", description:"b", facebook:"b", twitter:"b"},{name:"JOHN DOE", description:"c", facebook:"c", twitter:"c"}];

	let memberDetails = $(".member-details");
	let currentName = "",
		currentDescription = "",
		currentFacebook = "",
		currentTwitter = "";

	$(".member").on("click", function(){

		if ($(this).hasClass("selected")) {
			
			window.console.log("selected");
			$(this)
				.css({
					marginBottom:"0px"
				})
				.removeClass("selected");

			memberDetails.fadeOut(300);

		} else if ($(this).siblings("member").each(function(){
			if ($(this).hasClass("selected")) {
				return true;
			}}) ) {
			window.console.log("test1");
			$(this).siblings("member").each(function(){
				window.console.log("test2");
				if ($(this).hasClass("selected")) {
					$(this).removeClass("selected");
				}
				$(this).css({
					marginBottom:0
				});
			});
			memberDetails.fadeOut(200);
			
			
			for (let i = 0; i < membersDescriptions.length - 1; i++) {
				if (membersDescriptions[i].name == $(this).children(".member-name").text()) {
					currentName = membersDescriptions[i].name;
					currentDescription = membersDescriptions[i].description;
					currentFacebook = membersDescriptions[i].facebook;
					currentTwitter = membersDescriptions[i].twitter;
					break;
				} else {
					continue;
				}
			}
			memberDetails.children(".member-name").text(currentName);
			memberDetails.children(".member-detailed-description").text(currentDescription);
			memberDetails.children(".facebook a").attr({
				href:currentFacebook
			});
			memberDetails.children(".twitter a").attr({
				href:currentTwitter
			});

			$(this).addClass("selected");
				// .css({
				// 	marginBottom: (memberDetails.height() + 50) + "px"
				// });
			memberDetails.slideDown(200);


		} else {

			for (let i = 0; i < membersDescriptions.length - 1; i++) {
				if (membersDescriptions[i].name == $(this).children(".member-name").text()) {
					currentName = membersDescriptions[i].name;
					currentDescription = membersDescriptions[i].description;
					currentFacebook = membersDescriptions[i].facebook;
					currentTwitter = membersDescriptions[i].twitter;
					break;
				} else {
					continue;
				}
			}
			memberDetails.children(".member-name").text(currentName);
			memberDetails.children(".member-detailed-description").text(currentDescription);
			memberDetails.children(".facebook a").attr({
				href:currentFacebook
			});
			memberDetails.children(".twitter a").attr({
				href:currentTwitter
			});

			memberDetails.fadeIn(200);

			$(this).addClass("selected");


		}
		// $(this).css({
		// 	marginBottom: memberDetails.height() + 20
		// });
		// memberDetails.css({
		// 	top:($(this).offset().top + $(this).height + 10) + "px"
		// });

	});

	$(".close-detailed-description").on("click", function(){
		memberDetails.fadeOut(200);
	});
});
