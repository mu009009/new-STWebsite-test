import Velocity from 'velocity-animate'

$(".js-get-in-touch").click(function() {
  $('html, body').animate({scrollTop: $(document).height()}, 'slow');
});

// set up velocity movement instead
