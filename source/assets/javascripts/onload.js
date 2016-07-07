import Velocity from 'velocity-animate'

$(document).ready(function () {
	$('body').velocity("fadeIn", { duration: 800 });
	window.setTimeout(function() {
		$('.cognito form + div').hide();
	}, 2000);
});

