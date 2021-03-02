$(function () {
    // header. slider
  
    $(".slider__inner, .news__slider-inner").slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
  
    // section form. input select
    $("select").styler();
  
    // section header. button menu(media: width < 700px)
  
    $(".header__btn-menu").on("click", function () {
      $(".menu ul").slideToggle();
    });
  
    // button back to top
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $("#btn__top").fadeIn();
      } else {
        $("#btn__top").fadeOut();
      }
    });
  
    $("#btn__top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  