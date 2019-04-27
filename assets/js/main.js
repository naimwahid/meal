(function ($) {
	"use strict";

    jQuery(document).ready(function($){

	$(".resrurent-menu li").on("click", function() {
			
		$(".resrurent-menu li").removeClass("active");
		$(this).addClass("active");
		
		var selector = $(this).attr("data-filter");
		$(".resturent-food-items").isotope({
			filter:selector
		});
	});


	$(".single-customer-area").owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		loop: true,
		autoplay: true,
		navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"]
	});

    });


    jQuery(window).load(function(){

        
    });
	
	  $(".header").sticky({topSpacing:0});
	  
	  
	  
	$(function() {
	 $('html').smoothScroll(1000);
	});
		
	
	  

	 $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

}(jQuery));	