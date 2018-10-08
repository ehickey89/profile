
//navbar color change on scroll
$(function () {
  var header = $(".navbar");

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });

});


