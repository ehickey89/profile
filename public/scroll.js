<<<<<<< HEAD

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


=======

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


>>>>>>> 5847917ef23e94c85341903bd5e8d3746c9a0653
