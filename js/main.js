


// set up DOM
$(document).ready(function() {
	$('#switch').on("click", function() {
		$("html, h1, footer, #switch>div").toggleClass('on');
		console.log('working');
	});
});
