var corners = [
   'bottomLeft', 'bottomRight', 'bottomMiddle',
   'topRight', 'topLeft', 'topMiddle',
   'leftMiddle', 'leftTop', 'leftBottom',
   'rightMiddle', 'rightBottom', 'rightTop'
];
var opposites = [
   'topRight', 'topLeft', 'topMiddle',
   'bottomLeft', 'bottomRight', 'bottomMiddle',
   'rightMiddle', 'rightBottom', 'rightTop',
   'leftMiddle', 'leftTop', 'leftBottom'
];
var i = 0;
var width;
var midWidth;
var interval;

function getWidth(){
	width = 0;
	$('#gallery li').each(function() {
		width += $(this).outerWidth(true);
	});
}

function getMidWidth(){
	midWidth = width - 38;
}
	

function stretch() { 	
	$('div#stretch').load('gallery/stretch.html', function () {

		getWidth();
		getMidWidth();
		
		$(this).css('width', width);
		$('span#mid').css('width', midWidth); 	
		console.log('combined width of images: ' + width);
		});
} 

function stretchType() {
	$('a[href*=small]').click(function(){
				$('#start').css("background-image","url('img/stretchStart35film.png')");
				$('#mid').css("background-image","url('img/stretchMid35film.png')");
				$('#end').css("background-image","url('img/stretchEnd35film.png')");
				console.log("function stretchType: 135mm film stretcher");
		});
	$('a[href*=medium]').click(function(){
				$('#start').css("background-image","url('img/stretchStart120film.png')");
				$('#mid').css("background-image","url('img/stretchMid120film.png')");
				$('#end').css("background-image","url('img/stretchEnd120film.png')");
				console.log("function stretchType: 120 film stretcher");
		});
}

function dragScroll(){
				$('#wrapGallery').mousedown(function (event) {
					$(this)
					.data('down', true)
					.data('x', event.clientX)
					.data('scrollLeft', this.scrollLeft);
					
					return false;
					}).mouseup(function (event) {
					$(this).data('down', false);
					}).mousemove(function (event) {
					if ($(this).data('down') == true) {
					 	this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
					}
					}).mousewheel(function (event, delta) {
					this.scrollLeft -= (delta * 30);
					}).css({
					'overflow' : 'hidden',
					'cursor' : '-moz-grab'
				});	 			
}

function mouseOut() {
	$(window).mouseout(function (event) {
					if ($('#wrapGallery').data('down')) {
						try {
							if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
							$('#wrapGallery').data('down', false);
							}
						} catch (e) {}
					}
				});
}

function complete(){
	stretch(); 
	stretchType();
	
}

$(window).load(function(){
	
	
	$('div#wrapGallery').load('gallery/photo/small/ink.html', function() {
		console.log("wrapGallery: Page Load");
		dragScroll();
		
		complete();
		});
	
	// :::: HASH DEEP LINK :::: //
	function loadURL(url) {
	    	console.log("loadURL: " + url);
	    	$('div#wrapGallery').load(url, function() {
				console.log("wrapGallery: Div Load");
				complete();				
				
			});
	    }
		// Event handlers
	    $.address.init(function(event) {
	        console.log("init: " + $('[rel=address:' + event.value + ']').attr('href'));
	    }).change(function(event) {
	    	$("#wrapGallery").load($('[rel=address:' + event.value + ']').attr('href'));
	    	console.log("change: " + $('[rel=address:' + event.value + ']').attr('href'));
	    });
 
	    $('a').mousehold(function(){
	    	loadURL($(this).attr('href'));
	    });
	
	
	
	$('#galleryRight').hover(function(){
		$(this).animate({"right": "-=10px"}, "fast").animate({"right": "+=10px"}, "fast");
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('img/handRightHover.png')");
			$(this).animate({"right": "-=10px"}, "fast").animate({"right": "+=10px"}, "fast");
			$('#wrapGallery').animate({ scrollLeft: "+=333" }, 600);		
			});
		},
		function(){
			$('#galleryRight').css({"right": "10px"})
			.stop(true).stopTime()
			.css("background-image", "url('img/handRight.png')");
			
		});
		
	$('#galleryLeft').hover(function(){
		$(this).animate({"left": "-=10px"}, "fast").animate({"left": "+=10px"}, "fast");
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('img/handLeftHover.png')");
			$(this).animate({"left": "-=10px"}, "fast").animate({"left": "+=10px"}, "fast");
			$('#wrapGallery').animate({ scrollLeft: "-=333" }, 600);		
			});
		},
		function(){
			$('#galleryLeft').css({"left": "235px"})
			.stop(true).stopTime()
			.css("background-image", "url('img/handLeft.png')");
		});
	
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
			$("body").removeClass('bg2').addClass("bg1");
			$('em#hover').css("background-color","#00bbcc")
			.html('Design')
			.css('display','block');
		},
		function(){
			$("body").removeClass('bg2').addClass("bg1");
			$('em#hover').css('display','none');
		});
	
	$('a#web').hover(
		function(){
			$("body").removeClass('bg1').addClass("bg2");
			$('em#hover').css("background-color","#c03d23")
			.html('Web')
			.css('display','block');
		},
		function(){
			$("body").removeClass('bg1').addClass("bg2");
			$('em#hover').css('display','none');
		});
	
	$('a#who').click(
		function(){
			$("div#wrapGallery").load("page/who.html");
	});
	
	$('a#connect').click(
		function(){
			$("div#wrapGallery").load("page/connect.html");
	});
	
	$('a#index').click(
		function(){
			$('div#wrapGallery').css('overflow-y','scroll')
			.css('overflow-x','hidden')
			.load("page/index.html");
			//.fadeOut(1000)
			
	});
	
	$('a').not('a#index').click(
		function(){
			$('div#wrapGallery').css('overflow-y','hidden');
			$('div#wrapGallery').css('overflow-x','hidden');
	});
	
	$('a').click(
		function(){
			$('div#wrapGallery').scrollLeft(0);
	});

});
mouseOut();
 

