$(document).ready(function(){

	$(function() {
		$('.b1-ul li').click(function() {
	    $(this).siblings(".b1-ul ul").toggle();
	    $(this).toggleClass('active');
	  });
	});

	$('.tab-box a').click(function(e) {
        e.preventDefault();
        $('.tab-box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.power-station').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });

	$(".slaider").owlCarousel({
		loop:true,
    	margin: 10,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            },
            1200:{
                items:4
            }
        }  
	});

	$(window).scroll(function(){
    if ($(window).scrollTop() > 1800) {
        $('.line').addClass('active');
    }
    else {
        $('.line').removeClass('active');
    }
});

});