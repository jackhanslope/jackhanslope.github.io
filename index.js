$(document).ready(function() {

	$('.split').mouseover(function() {
		$(this).addClass("focus");
		$(this).removeClass("blur");
		$('.split').not(this).addClass("blur");
		$('.split').not(this).removeClass("focus");
	});

});
