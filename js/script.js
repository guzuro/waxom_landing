
$(".header-menu__burger").click(function (e) { 
   $(".header-menu__burger").toggleClass("active");
   $(".header-menu").toggleClass("active");
});

$(document).ready(function(){
   $('.home__slider').slick({
      dots: true,
   });
 });
 