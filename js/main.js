


// set up DOM
$(document).ready(function() {
	$('#switch').on("click", function() {
		$("html").toggleClass('on');
		$("h1").toggleClass('on');
		$("#switch>div").toggleClass('on');
		console.log('working');
	});
});
