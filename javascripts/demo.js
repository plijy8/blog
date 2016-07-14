
$(document).ready(function(){
     
    var instaCount = 8; 
    var height = $(window).height();
    var width = $(window).width();    
    var introH = $(".intro").height(),
        recentH = (introH * 100)/height,
        top = 50 - recentH/2 ;
    
    //$('.intro').css({ top:top+"%"});

    var sections = $('section'),
        nav = $('nav[role="navigation"]');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function () {
            var top = $(this).offset().top - 76
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });
    

    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function() {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });

    $(".search__input").focus(function() {
        $('.search').css({'border-color':'#2fa49d'});
        $(".search__submit").css({'color': '#2fa49d'});
    });
    $(".search__input").focusout(function() {
        $('.search').css({'border-color':'#d3d3d3'});
        $(".search__submit").css({'color': '#d3d3d3'});
    });

/* instagram */

    var photos = $('.instagram__img');
    photos.css({display: 'block'});
    if(width<800)
        {
            photos.eq(7).css({display: 'none'});
            photos.eq(6).css({display: 'none'});
            instaCount=6;
        }
    if(width<600)
        {
            photos.eq(5).css({display: 'none'});
            photos.eq(4).css({display: 'none'});
            instaCount=4;
        } 
    if(width<400)
        {
            photos.eq(3).css({display: 'none'});
            photos.eq(2).css({display: 'none'});
            instaCount=2;
        }   
    var photoW = (width-30)/instaCount;
    $(".instagram__img").css({'width': photoW, 'height':photoW});

});


