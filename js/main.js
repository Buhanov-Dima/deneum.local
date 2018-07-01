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
    })
});