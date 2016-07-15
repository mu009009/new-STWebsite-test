$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('.tks-logo').addClass("small");
    $('.open-btn').addClass("scroll")
  }
  else{
    $('header').removeClass("sticky");
    $('.tks-logo').removeClass("small");
    $('.open-btn').removeClass("scroll");
  }
});
