$(".header-menu__burger").click(function (e) {
   $(".header-menu__burger").toggleClass("active");
   $(".header-menu").toggleClass("active");
});

$(document).ready(function () {
   $('.home__slider').slick({
      dots: true,
   });
   $('.posts__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
            breakpoint: 967,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]

   });
});