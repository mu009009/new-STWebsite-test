$(document).ready(function(){
	
	// modal popups
	$('a[rel=modal]').click(function (e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$.get(url, function(data){
			$.modal(data, {
				opacity : '75',
				overlayClose : true
			});
		});
	});
});