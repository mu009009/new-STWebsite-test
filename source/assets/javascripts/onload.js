import Velocity from 'velocity-animate'

$(document).ready(function () {
	$('body').velocity("fadeIn", { duration: 800 });

	$('a.anchor-link').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
						scrollTop: $( $.attr(this, 'href') ).offset().top
					}, 500);
			return false;
	});
});
