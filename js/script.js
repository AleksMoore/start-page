/* Onlclick language */

$(document).ready(function(){
	$(".header__language a").click(function () {
     	$('.header__language a').toggleClass("active");
 	});
  });

/* Owl carousel */

$(function() {
 $('.slider__items').owlCarousel({
 	nav: true,
	dots: false,
	items: 1,
	loop: true,
	margin: 0
 });
});