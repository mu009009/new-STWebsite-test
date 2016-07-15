import Velocity from 'velocity-animate'

$(document).ready(function () {
	$('body').velocity("fadeIn", { duration: 800 });
	
	var $root = $('html, body');
	$('a.anchor-link').on('click', function(e) {
			var href = $.attr(this, 'href')
			$root.animate({
					scrollTop: $( href ).offset().top
			}, 500, function() {
				window.location.hash = href;
			});
			return false;
	});
	$('.match-height').matchHeight({
		byRow: true,
		property: 'min-height',
		target: null,
		remove: false
	});
});
