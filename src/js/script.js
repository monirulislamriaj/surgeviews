$(document).ready(function () {
  "use strict";

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".tabs-slider").slick("setPosition");
  });

  // -----------------------------
  //  AOS Initialize
  // -----------------------------
  AOS.init();
  // Smooth Scroll to Section
  $("a.page-scroll").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 180,
        },
        700
      );
    event.preventDefault();
  });
});
// Review Slider
$(".review-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// tabs Slider
$(".tabs-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
if (window.innerWidth > 991) {
  $(".faq-title").matchHeight({
    byRow: 0,
    byCol: 0,
  });
  $(".faq-content").matchHeight({
    byRow: 0,
    byCol: 0,
  });
}
if (window.innerWidth > 991) {
  $(".checkout-left").matchHeight({
    byRow: 0,
  });
  $(".checkout-right").matchHeight({
    byRow: 0,
  });
}

$(window).on("scroll", function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $(".main-navigation").addClass("nav-bg");
  } else {
    $(".main-navigation").removeClass("nav-bg");
  }
});
