$(window).load(function(){	
$('a#illustration').hover(
		function(){
			$('em#hover').css("background-color","#f49814")
			.html('Illustration')
			.css('display','block');
			
		},
		function(){
			$('em#hover').css('display','none');
		});
	
	$('a#photo').hover(
		function(){
			$('em#hover').css("background-color","#88aa33")
			.html('Photography')
			.css('display','block');
		},
		function(){
			$('em#hover').css('display','none');
		});
	
	$('a#design').hover(
		function(){
			$('em#hover').css("background-color","#00bbcc")
			.html('Design')
			.css('display','block');
		},
		function(){
			$('em#hover').css('display','none');
		});
	
	$('a#web').hover(
		function(){
			$('em#hover').css("background-color","#c03d23")
			.html('Web')
			.css('display','block');
		},
		function(){
			$('em#hover').css('display','none');
		});
});