$(function(){

    var ancho = $(window).width();
    var point = 992;

    if(ancho<= 992){
        //Menu Responsive
        $('.hamburger').on('click',function(){
            $('.menu-prin-movil').toggleClass('menu-animacion');
            $('.hamburger').toggleClass('hamburger-animation');
            $('.hamburger').toggleClass('is-active');

        //para que no se recargue
        return false;
        });

        //menu del responsive
        $('#nosotros').on('click',function(){
            $('#sub-nosotros').fadeToggle(500);
             return false;
        });
        $('#servicio').on('click',function(){
            $('#sub-servicio').fadeToggle(500);
             return false;
        });
        $('#pro-soc').on('click',function(){
            $('#sub-proc-soc').fadeToggle(500);
             return false;
        });
    };

    //submenu de programas sociales
/*
    $('#tall-prod').on('click',function(){
        $('#sub-tall-prod').fadeToggle(500);
         return false;
    });
*/
    //carousel principal
    var owl = $('.owl-carousel');
    owl.owlCarousel({
                responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            },
            // breakpoint from 480 up
            480 : {
               items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            },
            // breakpoint from 768 up
            768 : {
                items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });


    //owl-carousel-enlaces-externos
    //carousel



});//end
