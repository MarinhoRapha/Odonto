$(function(){
    // APLICANDO HOVER NO MENU 

    $('nav a').hover(function(){
        $('nav li').removeClass('selected');
        $(this).parent().addClass('selected')
    })

    // MENU MOBILE

    $('nav.mobile h3').click(function(){
        $('nav.mobile').find('ul').animate({width: 'toggle'});
        $('nav.mobile h3 i').toggleClass('fa-bars fa-plus');

        
    })

    // MENU SCROLL
    
    $('nav li, a').click(function(){
        var pegue = $(this).find('a');
        var href = pegue.attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop': offSetTop})

        return false;
    })


})

