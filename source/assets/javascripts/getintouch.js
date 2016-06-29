import Velocity from 'velocity-animate'

$(".test").click(function() {
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
});

// set up velocity movement instead
