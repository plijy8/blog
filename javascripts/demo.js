$(document).ready(function(){
        
        //кнопку скрола на главной по среденине.
        
        var width = $(window).width();
        var widthScrollBtn = $('.fullscr__scrollDown').width();
        var left = width/2 - widthScrollBtn/2;
       	$('.fullscr__scrollDown').css({left: left});
      	
        var WtxtWork = $('.work__text').outerWidth(true);
        var Wwork = $(".work").parent().outerWidth(true)
        var l = Wwork/2 - WtxtWork/2 - 15 ;
        $('.work__text').css({left: l});        

        //плавный переход по ссылкам
        
        $('a[href^="#"]').click(function () { 
             elementClick = $(this).attr("href");
             destination = $(elementClick).offset().top;
             if($.browser.safari){
                $('body').animate( { scrollTop: destination }, 1000 );
             }else{
                $('html').animate( { scrollTop: destination }, 1000 );
             }
             return false;
        });

       	//липкое меню

      	var height = $(window).height();
        var HeaderTop = $('#header').offset().top;
       	$(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                $('#header').css({position: 'fixed',top:'0px'}); 
            } 
            else {
                $('#header').css({position: 'static'});
            }
            if( ($(window).scrollTop() + height-40) > HeaderTop ) {
                $('.topLink').css({visibility: 'visible'}); 
            } 
            else {
                $('.topLink').css({visibility: 'hidden'});
            }
        });
});
