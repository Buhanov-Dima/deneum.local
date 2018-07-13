$(document).ready(function(){

	/*
    $(function() {
		$('.b1-ul li').click(function() {
	    $(this).siblings(".b1-ul ul").toggle();
	    $(this).toggleClass('active');
	  });
	});
    */


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


    $('.vertical_slide').slick({
        vertical:true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        pauseOnHover: false
    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top-130}, 500);
        return false;
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