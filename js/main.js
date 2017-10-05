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
    $('.carousel-principal').slick({
      dots:true,
         arrows: false,
        slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    //owl-carousel-enlaces-externos
    $('.carousel-enlaces').slick({
  slidesToShow: 4,
        centerPadding: '60px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    variableWidth:true,
    dots:true,
    centerMode: true,
  responsive: [
  {
      breakpoint: 992,
      settings: {
        arrows: false,
          dots:true,
          draggable:true,
        centerMode: true,
          variableWidth:true,
        slidesToShow: 4
      }
    }
      ,
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
          variableWidth:true,
          dots:true,
          mobileFirst:true,
          centerPadding: '60px',
        slidesToShow: 2
      }
    }
      ,
    {
      breakpoint: 480,
      settings: {
        arrows: false,
          dots:true,
          draggable:true,
          centerPadding: '60px',
        centerMode: true,
          variableWidth:true,
          mobileFirst:true,
        slidesToShow: 1
      }
    }
  ]
});


});//end
