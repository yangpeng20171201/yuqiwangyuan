$(function(){
	

	/* 一级菜单 */
	$('.fenlei>div').click(function(){
		var i = $(this).index();
		$('.fenlei>div').css({
			'borderBottom':'0'
		})
		$(this).css({
			'borderBottom':'0.04rem solid #ff0000'
		})
		$('.main>div').css('display','none');
		$('.main>div').eq(i).css('display','block');
		/* 详情菜单 */
		$('.xq_title>div').click(function(){
			var i = $(this).index();
			$('.xq_title>div').css({
				'color':'#000'
			})
			$(this).css({
				'color':'red'
			})
			$('.xiangqing_box>div').css('display','none');
			$('.xiangqing_box>div').eq(i).css('display','block');
		})
		
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})