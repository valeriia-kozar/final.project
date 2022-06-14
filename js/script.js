// Scroll

AOS.init ({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});


// Burger menu

$('.js-menu').on('click', () => {
	$('.js-menu').toggleClass('active');
	$('.js-nav').toggleClass('open');
	$('.js-nav__list').toggleClass('show');
});

 
$(document).ready(function(){
	$("#nav").on("click","a", function (event) {
		event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
        responsive: [
            {
            breakpoint: 1024,
            }
        ]
	});
});

// Carousel

$(document).ready(function(){
    $(".slideshow-container").mySlides({
        speed:3000
    })
})

 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");

     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex=slides.length
     }
     for (i=0; i < slides.length; i++){
         slides[i].style.display = "none";
     }
     slides[slideIndex-1].style.display = "block";
     
 }


