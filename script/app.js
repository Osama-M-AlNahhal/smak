$(document).ready(function(){

	let windowWidth = $(window).innerWidth(),
	windowHeight = $(window).height();
	
	let navbar__height = $(".navbar").height();
		hero__height = $(".hero-section").height();

	let windowScrollTop = $(window).scrollTop();


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

	//navbar stuff
	// $("nav").css({
	// 	backgroundColor:"var(--dark-blue)"
	// });
	$(window).on("scroll", function(){
		windowScrollTop = $(window).scrollTop();
	
		

		//testimonials-section stuff
		let clientsSection = $(".clients-section"),
			clientsTopOffset = clientsSection.offset().top - 200,
			testimonialsSection = $(".testimonials-section"),
			testimonialsTopOffset = clientsTopOffset + clientsSection.height();


		if (windowScrollTop > clientsTopOffset) {
			testimonialsSection.css({
				"display":"flex"
			});
		} else {
			testimonialsSection.css({
				"display":"none"
			});
		}

		//footer stuff
		let floatingBackToTopBtn = $(".back-to-top-btn.floating");
		if (windowScrollTop >= $(".services-section").offset().top) {

			if (!floatingBackToTopBtn.hasClass("visible")) {
				floatingBackToTopBtn.fadeIn(500).addClass("visible");
			}
		} else {
			if (floatingBackToTopBtn.hasClass("visible")) {
				floatingBackToTopBtn.fadeOut(500).removeClass("visible");
			}
		}

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
	//cashing
	let navbar = $(".navbar");
	let firstTimeSeeingNavbar = true, 
		firstTimeClickingHamburger = true;
	let navbarLinks = $(".navbar-links-ul li a"),
		navbarLinksList = $('.navbar-links-ul'),
		hamburgerIcon = $('.hamburger-icon');
		
	//desktop
	if (windowWidth >= 768) {
		navbarLinksList.css({
			width:"fit-content"
		});

		

		navbarLinks.addClass("desktop-hover");

		firstTimeSeeingNavbar = true;
		if (windowScrollTop == 0) {
			navbar.css("background", "transparent");
			navbarLinks.addClass("at-top");

			if (firstTimeSeeingNavbar) {
				let loadingDelay = 1250; //in milliseconds

				$(".logo").css({
					left:"-" + (containerPadding - (containerPadding * 0.05)) + "px",
					opacity: 0
				});
				$(".navbar-links-ul").css({
					right:"-" + (containerPadding - (containerPadding * 0.2)) + "px",
					opacity: 0
				});
				$(".logo").delay(loadingDelay).animate({
					opacity: 100
				}, 1000);
				$(".navbar-links-ul").delay(loadingDelay).animate({
					opacity: 100
				}, 1000);

				firstTimeSeeingNavbar = false;
			} else {
				
				$(".logo").animate({
					left:"-" + (containerPadding - (containerPadding * 0.05)) + "px"
				});
				$(".navbar-links-ul").animate({
					right:"-" + (containerPadding - (containerPadding * 0.2)) + "px"
				});
			}

		} else {
			navbarLinks.removeClass("at-top");
			navbar.css("background", "linear-gradient(to bottom, #122a2fff, #122a2f00");
		}

		//mobile & tablets
	} else {

		navbarLinksList.css({
			width:"clamp(230px, 80%, 400px)"
		});

		navbarLinks.addClass("mobile-hover");

		navbarLinks.each(function(){
			if ($(this).hasClass("current")) {
				$(this).css("letter-spacing", "10px")
			}
		})

		if (windowWidth >= 600) { //tablet

			navbarLinksList.css({
				right: "-" + ($(this).innerWidth()) + "px",
				alignItems: "flex-end",
				paddingInlineEnd: containerPadding + 5
			});


		} else { //mobile

			navbarLinksList.css({
				right: "-" + ($(this).innerWidth() + containerPadding) + "px"
			});
		}
	}

	$(window).on("scroll", function(){
		let homeSectionTop = 0,
			servicesSectionTop = $(".services-section").offset().top,
			workSectionTop = $(".works-section").offset().top,
			aboutSectionTop = $(".about-us-section").offset().top,
			clientsSectionTop = $(".clients-section").offset().top,
			contactSectionTop = $(".contact-us-section").offset().top;

		if (windowScrollTop < servicesSectionTop - 1) {
			//we're in the home section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='HOME']").addClass("current");
		} else if (windowScrollTop < workSectionTop - 1) {
			//we're in the services section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='SERVICES']").addClass("current");
			
		} else if (windowScrollTop < aboutSectionTop - 1) {
			//we're in the works section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='WORK']").addClass("current");
			
		} else if (windowScrollTop < clientsSectionTop - 1) {
			//we're in the about section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='ABOUT']").addClass("current");
			
		} else if (windowScrollTop < contactSectionTop - 1) {
			//we're in the clients section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='CLIENTS']").addClass("current");
			
		} else {
			//we're in the contact section
			navbarLinks.removeClass("current").css("letter-spacing","0");
			navbarLinksList.find("a[data-scroll='CONTACT']").addClass("current");
		}

		if (windowWidth >= 768) {
			if (windowScrollTop == 0) {
				if (!navbarLinks.hasClass("at-top")) {
					navbarLinks.addClass("at-top");
				}

				navbar.css("background", "transparent");

				$(".logo").animate({
					left:"-" + (containerPadding - (containerPadding * 0.05)) + "px"
				}, {queue:false});
				$(".navbar-links-ul").animate({
					right:"-" + (containerPadding - (containerPadding * 0.2)) + "px"
				}, {queue:false});

			} else {
				if (navbarLinks.hasClass("at-top")) {
					navbarLinks.removeClass("at-top");
				}
				$(".logo").animate({
					left:0
				}, {queue:false});
				$(".navbar-links-ul").animate({
					right:0
				}, {queue:false});

				navbar.css("background", "linear-gradient(to bottom, #122a2fff, #122a2f00");

				
			}
		}
	});

	$(".navbar").mouseenter(function(){
		$(this).data("last-style", $(this).attr("style"));
		$(this).removeAttr("style");
	}).mouseleave(function(){
		$(this).attr({
			"style":$(this).data("last-style")
		}).data("last-style", "");
	});

	navbarLinks.mouseover(function(){
		console.log("navbar links hovered");
	});
	
	
	navbarLinks.on("click", function(){
		navbarLinks.removeClass("current");
		$(this).addClass("current");

		if (windowWidth >= 768) {
			if (windowScrollTop == 0) {
				//you've already done enough damage oh dear god please just stop!! 
			} else {
				navbar.css("background", "linear-gradient(to bottom, #122a2fff, #122a2f00");
			}
		} else {
			$(this).css("letterSpacing", "10px");
			hamburgerIcon.delay(1000).trigger("click");
		}
	});
	

	hamburgerIcon.on("click", function(){

		if (firstTimeClickingHamburger) {
			navbarLinksList.removeClass("hidden");

			firstTimeClickingHamburger = false;
		}

		navbarLinksList.toggleClass('expand');

		if (windowWidth < 600) { //mobile

			if (navbarLinksList.hasClass("expand")) {
				navbarLinksList.animate({
					right:0
				});

				navbar.css({
					"background":"var(--dark-blue)"
				});
			} else {
				navbarLinksList.delay(500).animate({
					right:"-" + (navbarLinksList.innerWidth() + 1) + "px"
				}, {queue:false});
				navbar.css({
					"background": "linear-gradient(to bottom, #122a2fff, #122a2f00"
				});

			}

		} else { //tablet

			if (navbarLinksList.hasClass("expand")) {
				navbarLinksList.animate({
					right:0
				});
			} else {
				navbarLinksList.animate({
					right:"-" + ($(this).innerWidth() + containerPadding + 1) + "px"
				});
			}
		}
	});


/* ----------------------------------------------------
				hero functionality
-----------------------------------------------------*/

	let heroContainer = $(".hero-container"),
		heroBgStrip = $(".hero-bg-strip"),
		heroSlogan = $(".hero-container .slogan"),
		heroBuyBtn = $(".hero-container .buy-btn"),
		moveDownBtn = $(".hero-container .move-down-btn"),
		slidingPanels = $(".sliding-panels > [class*='panel']"),
		slidingPanel1 = $(".sliding-panels .panel-1"),
		slidingPanel2 = $(".sliding-panels .panel-2"),
		slidingPanel3 = $(".sliding-panels .panel-3"),
		slidingPanel4 = $(".sliding-panels .panel-4");

	let startingDelay = 500;
	slidingPanel1.delay(startingDelay).delay(100).animate({
		width:0
	}, 500);
	slidingPanel2.delay(startingDelay).delay(250).animate({
		"width":"0"
	}, 500);
	slidingPanel3.delay(startingDelay).delay(400).animate({
		"width":"0"
	}, 500);
	slidingPanel4.delay(startingDelay).delay(550).animate({
		"width":"0"
	}, 500);
	


	// $(heroBgStrip).css({
	// 		right:"-"+$(window).width()+"px",
	// 		opacity:0,
	// 		visibility:"visible"
	// 	}).animate({right:0,}, {duration:500, queue:false})
	// 		.animate({opacity:100}, {duration:500, queue:false});

	// heroSlogan.slideDown(300);
	// heroBuyBtn.css({
	// 		left:"-"+$(window).width()+"px",
	// 		opacity:0,
	// 		visibility:"visible"
	// 	}).animate({left:0,}, {duration:600, queue:false})
	// 		.animate({opacity:100}, {duration:500, queue:false});


	// moveDownBtn.css({
	// 	bottom:"-"+moveDownBtn.height()*2 + "px",
	// 	opacity:0
	// }).delay(200).animate({bottom:0,}, {duration:500, queue:false})
	// 	.animate({opacity:100}, {duration:500, queue:false});

/* ----------------------------------------------------
				services functionality
-----------------------------------------------------*/

/* ----------------------------------------------------
				works functionality
-----------------------------------------------------*/

let closeWorksShowcaseIcon = $('.close-showcase'),
	worksShowcase = $('.work-showcase'),
	filters = $('.filter');

closeWorksShowcaseIcon.on('click', () => {
	worksShowcase.fadeOut(500);
});

filters.on("click", function(){
	if (!$(this).hasClass("selected")) {
		//query into the database to get the works and showcase them by appending them into the .work-selection-wrapper
		$(this).addClass("selected").siblings().removeClass("selected");
	}
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


	let membersDescriptions = [{name:"SEBASTIEN TYMOFIY", description:"a", facebook:"a", twitter:"a"},{name:"ELISABETA HERMAN", description:"b", facebook:"b", twitter:"b"},{name:"RAJEEV DAPHNE", description:"c", facebook:"c", twitter:"c"},{name:"JORY AWILIX", description:"d", facebook:"d", twitter:"d"}];

	let memberDetails = $(".member-details");
	let currentName = "",
		currentDescription = "",
		currentFacebook = "",
		currentTwitter = "";

	$(".member").on("click", function(){

		if ($(this).hasClass("selected")) {

			$(this).css({marginBottom:"0px"}).removeClass("selected");
			memberDetails.slideUp(300);

			//if i click on another member while a member's selected
		} else if ($(this).siblings(".member").each(function(){	if ($(this).hasClass("selected")) {	return true; }}) ) {
			$(this).siblings(".member").each(function(){
				if ($(this).hasClass("selected")) {
					$(this).removeClass("selected");
				}
				$(this).css({
					marginBottom:0
				});
			});
			// memberDetails.slideUp(200);
			
			
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
					window.console.log("GoT is trash");
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

			memberDetails.slideDown(200);

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
		memberDetails.slideUp(200);
	});

/* ----------------------------------------------------
					Clients
-----------------------------------------------------*/


	let previousClientBtn = $(".previous-client"),	
	nextClientBtn = $(".next-client"),
	clientsList = $(".client"),
	firstClient = $(".client:first-child"),
	lastClient = $(".client:last-child"),
	clientsSliderWrapper = $(".clients .slider-wrapper"),
	clients = $(".clients"),
	clientsWidth = clients.css("width"); //"97px"
	

	previousClientBtn.on("click", function(){
		lastClient = $(".client:last-child");
		lastClient.clone(true).prependTo(clientsSliderWrapper);
		lastClient.detach();
		lastClient = $(".client:last-child");
	});

	nextClientBtn.on("click", function(){
		firstClient = $(".client:first-child");
		firstClient.clone(true).appendTo(clientsSliderWrapper);
		firstClient.detach();
		firstClient = $(".client:first-child");
	});




/* ----------------------------------------------------
					Testimonials
-----------------------------------------------------*/
	let clientsSection = $(".clients-section"),
		contactUsSection = $(".contact-us-section"),
		testimonialsSection = $(".testimonials-section"),
		testimonialsSectionHeight = testimonialsSection.height(),
		clientsTopOffset = clientsSection.offset().top - 200,
		testimonialsController = $(".testimonies-control");

	if (windowScrollTop > clientsTopOffset) {
		testimonialsSection.css({
			"display":"flex"
		});
	} else if (windowScrollTop > contactUsSection.offset().top) {
		testimonialsSection.css({
			"display":"none"
		});
	} else {
		testimonialsSection.css({
			"display":"none"
		});
	}

	clientsSection.css({
		marginBottom: testimonialsSectionHeight
	});

	contactUsSection.css({
		marginTop: testimonialsSectionHeight
	});


	//to do:
	//at the start, check how many testimonials there are and add that many control sliders
	//---------


	let testimoniessOptions = $(".testimonies-control .control-slider-element"),
		currentTestimony = $(".testimony.current"),
		currentTestimonySliderElement = $(".testimonials-control .control-slider-element.current");
		
	testimoniessOptions.on("click", function(){
		if (! $(this).hasClass("current")) {
			$(this).addClass("current").siblings(".control-slider-element").removeClass("current");
			$(".testimony:nth-of-type(" + $(this).data("testimony-id") + ")").addClass("current").siblings(".testimony").removeClass("current");
		}
	});


/* ----------------------------------------------------
					Contact form
-----------------------------------------------------*/
	
	let placeholder = "";
	$("input[placeholder], textarea").on("focus", function(){
		placeholder = $(this).attr("placeholder");
		$(this).attr("placeholder", "");
	}).on("blur", function(){
		$(this).attr("placeholder", placeholder);
	});

	$(".contact-form").submit((e) => {
		let theresAnEmptyField = false;
		let inputFields = $(".contact-form input, .contact-form textarea");
		inputFields.each(function(){
			if($(this).val() == "") {
				theresAnEmptyField = true;
			}
		});


		//basic error detection (just checking for empty fields)
		if (theresAnEmptyField) {
			e.preventDefault();
			$(".pop-ups-container").empty();
			$("<p class='error-message-pop-up wow animated animate__animated animate__shakeX shakeX' data-wow-duration='750ms' data-wow-delay='300ms' style='visibility:visible;animation-name:shakeX;animation-duration='750ms';animation-delay='300ms'>Please fill in all fields..</p>", {
					width: "fit-content",
					color: "var(--white)",
					backgroundColor: "var(--red)",
					padding: "1rem 2rem",
					borderRadius: "100px",
					display:"none"
			}).appendTo(".pop-ups-container").fadeIn(500);
		} else {
			$(".pop-ups-container").empty();
			$("<p class='success-message-pop-upwow animated animate__animated animate__bounceIn bounceIn' data-wow-duration='750ms' data-wow-delay='300ms' style='visibility:visible;animation-name:bounceIn;animation-duration='750ms';animation-delay='300ms'>Message Sent!</p>", {
				width: "fit-content",
				color: "var(--white)",
				backgroundColor: "var(--green)",
				padding: "1rem 2rem",
				borderRadius: "100px",
				display:"none"
		}).appendTo(".pop-ups-container").fadeIn(500);

		}

		// for (let i = 0; i < inputFields.length; i++){
		// 	// if (!inputFields.get(i).val()) {
		// 	// 	e.preventDefault();
		// 	// 	$("<p class='error-message-pop-up'>Please fill in all fields..</p>", {
		// 	// 		width: "fit-content",
		// 	// 		color: "var(--white)",
		// 	// 		backgroundColor: "var(--red)",
		// 	// 		padding: "1rem 2rem",
		// 	// 		borderRadius: "100px"
		// 	// 	}).appendTo(".pop-ups-container");
		// 	// }
		// }

	});

	
});

