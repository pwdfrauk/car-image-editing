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
// counter section js 
window.onload = main;
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower
// on view start scrooling number 
function main() {
    window.addEventListener("scroll", function(){
        if(isElementIntoView("#counter-container")) {

            // conuter animation number 
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    // Lower inc to slow and higher to slow
                    const inc = target / speed;

                    // console.log(inc);
                    // console.log(count);

                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = count + inc;
                        // Call function every ms
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        } 
    });
    
}

// this function is calc to view of screen
function isElementIntoView(el) { 
    var e = document.querySelector(el);
    var rect = e.getBoundingClientRect();
    return  window.innerHeight-rect.top >= 50; 
    }


/* owl carousel our client */
$('.our-client').owlCarousel({
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


/*wor js*/
 new WOW().init();
/* owl carousel */
$('.owl-testi').owlCarousel({
            autoplay: true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            smartSpeed: 800,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
	});
