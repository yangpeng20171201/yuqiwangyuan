$(function() {

	$('.state-box>div').click(function() {
		var i = $(this).index();
		console.log(i)
		$('.box-child').removeClass('active');
		$(this).children().addClass('active');
		$('#main>div').hide();
		$('#main>div').eq(i).show();
	})
})