$(document).ready(function () {
	"use strict";

/* start smooth scroll */

$(function () {

	var winH = $(window).height(),
		headerH = $('.header_content').innerHeight();
	$('.home').css("margin-top", headerH)
	$('.home , .carousel-item').height(winH - headerH);
});

function smoothScrool(duration) {

	$('a[href^="#"]').on('click', function (event) {

		var target = $($(this).attr('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}

	});
}

$(function () {
	smoothScrool(1000);
});


/* end smooth scroll */


/* Start carousel slider */

$('.carousel').carousel({
	interval: 5000,
	loop: Infinity
})

$(".carousel").carousel({
	swipe: 50
});

/* End carousel slider */



/*Start owl carousel*/

var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 4,
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			loop: true
		},
		500: {
			items: 1,
			nav: true,
			loop: true
		},
		700: {
			items: 2,
			nav: true,
			loop: true
		},
		900: {
			items: 2,
			nav: true,
			loop: true
		},
		1000: {
			items: 4,
			nav: true,
			loop: true
		}
	}
});

/* End owl carousel*/

/* start navbar*/
$('.header_content .navbar-nav a').on('click', function () {
	$('.header_content .navbar-nav').find('li.active').removeClass('active');
	$(this).parent('li').addClass('active');
});

/*end navbar*/

/* 

 Set Header

*/

var header = $('.header');

setHeader();

$(window).on('resize', function () {
	setHeader();

	setTimeout(function () {
		$(window).trigger('resize.px.parallax');
	}, 375);
});

$(document).on('scroll', function () {
	setHeader();
});

function setHeader() {
	if ($(window).scrollTop() > 91) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}
}


/* 

 End Header

*/


/* 

 Start Menu

*/

initMenu();

function initMenu() {
	var hamb = $('.hamburger');
	var menu = $('.menu');
	var mnav = $('.main_na');
	var menuOverlay = $('.menu_overlay');
	var menuClose = $('.menu_close_container');

	hamb.on('click', function () {
		menu.toggleClass('active');
		menuOverlay.toggleClass('active');
	});

	mnav.on('click', function () {
		menu.toggleClass('active');
		menuOverlay.toggleClass('active');
	});


	menuOverlay.on('click', function () {
		menuOverlay.toggleClass('active');
		menu.toggleClass('active');
	});

	menuClose.on('click', function () {
		menuOverlay.toggleClass('active');
		menu.toggleClass('active');
	});

}

new WOW().init();

});