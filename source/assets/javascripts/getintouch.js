import Velocity from 'velocity-animate'

$(".js-get-in-touch").click(function() {
  $('.getintouch-bar').velocity("scroll", { duration: 750, offset: 250 });
  var $this = $(this);
  $this.toggleClass('.js-get-in-touch');
  if($this.hasClass('.js-get-in-touch')){
    $this.html('Collapse <i id="iconChange" class="fa fa-arrow-down"></i>');
  } else {
    $this.html('Expand <i id="iconChange" class="fa fa-arrow-up"></i>');
  }
});

// set up velocity movement instead
