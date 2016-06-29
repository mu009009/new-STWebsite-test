$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    $('.tks-logo').addClass("small");
  }
  else{
    $('header').removeClass("sticky");
    $('.tks-logo').removeClass("small");
  }
});
