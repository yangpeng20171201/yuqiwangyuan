$(function() {

	$('.nav_ul li').click(function() {
		var i = $(this).index();
		$('.nav_ul li').removeClass('b-t-red');
		$(this).addClass('b-t-red');
		$('.main>div').hide();
		$('.main>div').eq(i).show();
		$('.sqsh').click(function(){
			window.location.href="../../src/pingjiazx/shengqtk.html";   
		});
	
	})
})