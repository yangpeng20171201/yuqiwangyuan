$(function(){
	$('.main_left li').click(function(){
		var i = $(this).index();
		$('.main_left li').css({
			'background':'#fff',
			'color':'#000'
		})
		$(this).css({
			'background':'#71bfff',
			'color':'#fff'
		})
		switch (i){
            case 0: x = 270*i; break;
            case 1: x = 270*i; break;
            case 2: x = 270*i; break;
            case 3: x = 270*i; break;
            case 4: x = 270*i; break;
            case 5: x = 270*i; break;
            default: x = 270;
        }
        $(".main_right").scrollTop(x);
	})
	
	$('.sp_show dl').click(function(){
		location.href = 'spzs.html';
	})
	
	$('.spfl').click(function(){
		window.location.href = 'spfl.html';
	})
	
	$('.dpjj').click(function(){
		window.location.href = 'dpjj.html';
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})