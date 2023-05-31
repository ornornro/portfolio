$(document).ready(function() {
    $(function (win, $) {
        try {
            DM.init();
        } catch (e) {
            console.log(e);
        }
    });

    (function(win, $) {
        DM = {
            init: function () {
                this.initHeader();
                
                //WOW
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 50,
                    mobile: true,
                    live: true
                });
                wow.init();
                //WOW end
            },
            initHeader: function () {
                $('.header .gnb ul').mouseenter(function () {
                    $('body').addClass('openAllGnb');
                    return false;
                });
                
                $('.header').mouseleave(function () {
                    $('body').removeClass('openAllGnb');
                    return false;
                });
                
                $('.header .btn_menu').click(function () {
                    $('body').addClass('openMenu');
                    return false;
                });
                
                $('.m_menu .btn_close').click(function () {
                    $('body').removeClass('openMenu');
                });
                
                $('.m_menu .m_gnb > ul > li > a').click(function () {
                    $(this).toggleClass('on');
                    $(this).next('.sub_gnb').slideToggle(200);
                });
                
                $('.mask').click(function () {
                    $('body').removeClass('openMenu');
                });
                
                $(window).scroll(function(){
                    var scrollTop = $(window).scrollTop();
                    if(scrollTop > 0){
                        $('#header').addClass('minHeader');
                    }else{
                        $('#header').removeClass('minHeader');
                    }
                });
            },
            is_screen: function (max_width) {
                if (win.matchMedia) {
                    return win.matchMedia('(max-width:' + max_width + 'px)').matches;
                } else {
                    return win.innerWidth <= max_width;
                }
            },
            custom_cursor: function () {
                if(!this.is_screen(1023)){
                    var $cursor = $('#custom_cursor, #custom_cursor_text');
                    var $circle = $cursor.find('.custom_hover_circle');
                    var $txt = $cursor.find('.custom_hover_text');
                    
                    // default moving
                    $('body').mousemove(function (e) {
                        TweenMax.to($cursor, 1.3, {
                            x: e.clientX - $cursor.width() / 3,
                            y: e.clientY - $cursor.height() / 3,
                            ease: Power3.easeOut
                        });
                    });
                    
                    // global cursor
                    $(document).on({
                        mouseenter: function () {
                            TweenMax.killTweensOf($circle, $txt);
                            TweenMax.to($circle, .3, {width: '100%', height: '100%', autoAlpha: 1, ease: Power0.easeNone});
                            TweenMax.to($txt, .3, {width: '100%', height: '100%', autoAlpha: 1, ease: Power0.easeNone});
                        },
                        mouseleave: function () {
                            TweenMax.killTweensOf($circle, $txt);
                            TweenMax.to($circle, .2, {width: 0, height: 0, autoAlpha: 0, ease: Power0.easeNone});
                            TweenMax.to($txt, .2, {width: 0, height: 0, autoAlpha: 0, ease: Power0.easeNone});
                        }
                    }, '.custom_hover');
                }
            },
            main_intro:function(){
                $('.main_intro .list_intro > li').mouseenter(function () {
                    $(this).parent().removeClass('bg_s1 bg_s2 bg_s3');
                    $(this).parent().addClass('bg_s'+($(this).index() + 1));
                    $(this).addClass('on');
                });
                $('.main_intro .list_intro > li ').mouseleave(function () {
                    $(this).removeClass('on');
                });
            },
            goToId:function(id){
                var anh = $('#'+id).offset().top;
                $('html,body').stop().animate({scrollTop:anh},500);
            }
        }
    })(window, jQuery);
    
    //다음페이지로 스무스하게 넘어가기
    
    $('.mouse').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
      return false;
    });
    
});    

$(document).ready(function(){
	$(function () {
		$('.dticon').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
var scrollHeight = $(document).height();
		$('#homedown').click(function () {
			$('body,html').animate({
				scrollTop: scrollHeight
			}, 800);
			return false;
		});
	});

});

$(function(){
    try{
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            $('#txt_oneStop').css({left:(20 - scrollTop/docHeight * 250) + '%'});
        });
    }catch (e) {
        console.log(e);
    }
});

$(document).ready(function() {

	if( $(window).scrollTop() > 10){
		$('#mHeader').addClass('on');
	}
	else{
		$('#mHeader').removeClass('on');
	}

	//mobile menu
	$('#mHeader .btn_m_menu').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('#mHeader').removeClass('open')
		}
		else{
			$(this).addClass('active')
			$('#mHeader').addClass('open')
		}
	})
	$('.m_menu > li > a').on('click', function(){
		
		if($(this).hasClass('active')){
			$(this).removeClass('active')
			$('.m_menu > li > ul').stop().slideUp()
		}
		else{
			$('.m_menu > li > a').not($(this)).removeClass('active');
			$(this).addClass('active');
			$('.m_menu > li > ul').not($(this).next('ul')).slideUp();
			$(this).next('ul').stop().slideDown()
		}
		
	})

	$(window).scroll(function(){
		if( $(window).scrollTop() > 10){
			$('#mHeader').addClass('on');
		}
		else{
			$('#mHeader').removeClass('on');
		}
	})

});    














