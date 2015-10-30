$(document).ready(function() {
	$('#nav > li').mouseover(function() {
		$(this).find('ul').addClass('show-menu');
	});
	$('#nav > li').mouseout(function() {
		$(this).find('ul').removeClass('show-menu');
	});	
});