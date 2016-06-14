$(document).ready(function(){
        
    var width = $(window).width();
    var height = $(window).height();
    $(".offset").css({height: height});
    
    var introH = $(".intro").height();
    var recentH = (introH * 100)/height;
    var top = 50 - recentH/2 ;
    $('.intro').css({ top:top+"%"});
    
    var postsH = $(".otherPosts").outerHeight();
    $(".categories").css({height: postsH});

    $(".search__input").focus(function() {
        $('.search').css({'border-color':'#333'});
    });
    $(".search__input").focusout(function() {
        $('.search').css({'border-color':'#2fa49d'});
    });
    //липкое меню

    var location = window.location.href; // получаем адрес страницы
    var link = "file:///D:/workspace/templates/blog/index.html";                // получаем адрес ссылки
    if(location != link) {               // при совпадении адреса ссылки и адреса окна
           $('.mainMenuWrap').css({position: 'fixed',top:'0px','background-color':'#333','margin-top':'0px'}); 
    }

    var HeaderTop = $('.mainMenuWrap').offset().top;
     if(location == link){
        $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
             $('.mainMenuWrap').css({position: 'fixed',top:'0px','background-color':'#333','margin-top':'0px'}); 
         } 
        else {
            $('.mainMenuWrap').css({position: 'static','background-color':'transparent','margin-top':'100px'});
        }
    });
     }
    

        

});