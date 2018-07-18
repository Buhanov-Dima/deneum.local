$(document).ready(function(){

	
    $(function() {
		$('.b1-ul li').click(function() {
	    $(this).siblings(".b1-ul ul").toggle();
	    $(this).toggleClass('active');
	  });
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

     $('form').on('submit', sendEmail);

    function sendEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;

        var $phoneInput = $form.find('input[name="mail"]');

        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';

        if (valPhone == '') {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }
        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);
        if (hasError) {
            return false;
        }
        var obj = {
            mail: valPhone,
        };
        $.ajax({
            type: "POST",
            url: "/mailpost.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                gtag('event', 'ev1', { 'event_category': 'form', 'event_action': 'mail', });
                yaCounter49643068.reachGoal('mail');
                $phoneInput.val("");
                $.fancybox.open({src  : '#popup', type : 'inline',});
                setTimeout(function(){
                    $.fancybox.close(true);
                }, 2500);
            },
        });
    }

});

var cssFix = function(){
  var u = navigator.userAgent.toLowerCase(),
  is = function(t){return (u.indexOf(t)!=-1)};
  $("html").addClass([
    (!(/opera|webtv/i.test(u))&&/msie (\d)/.test(u))?('ie ie'+RegExp.$1)
      :is('firefox/2')?'gecko ff2'
      :is('firefox/3')?'gecko ff3'
      :is('gecko/')?'gecko'
      :is('opera/9')?'opera opera9':/opera (\d)/.test(u)?'opera opera'+RegExp.$1
      :is('konqueror')?'konqueror'
      :is('applewebkit/')?'webkit safari'
      :is('mozilla/')?'gecko':'',
    (is('x11')||is('linux'))?' linux'
      :is('mac')?' mac'
      :is('win')?' win':''
  ].join(''));
}();