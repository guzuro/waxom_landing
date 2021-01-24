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
      ]
   });

   window.onscroll = () => {
      headerBackground();
   }
});

function headerBackground() {
   if (window.pageYOffset > "150") {
      $('.header').addClass("scroll");
   } else {
      $('.header').removeClass("scroll");
   }

}