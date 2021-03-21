/*plain js code */
/* mobile nav */
var mobileNav = document.getElementById('mobilenav');
function openNav() {
	mobileNav.style.width = "100%";
	console.log('open nav is cliking');
};
function clossNav() {
	mobileNav.style.width = "0%";
	console.log('mobile nav is closing')
};
/*wor js*/
 new WOW().init();
/* owl carousel */
$('.owl-carousel').owlCarousel({
				loop:true,
				margin:20,
				nav:false,
				autoplay:true,
    			autoplayTimeout:2000,
    			autoplayHoverPause:true,
				responsive:{
				    0:{
				        items:1
				    },
				    600:{
				        items:3
				    },
				    1000:{
				        items:5
				    }
				}
			});