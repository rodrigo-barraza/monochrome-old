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
		
		$('div#stretch').css('width', width);
		$('span#mid').css('width', midWidth); 
		console.log(midWidth, width);

	
		});
} 

function stretchType() {
	$('a[href*=small]').click(function(){
				$('#start').css("background-image","url('../img/stretchStart35film.png')");
				$('#mid').css("background-image","url('../img/stretchMid35film.png')");
				$('#end').css("background-image","url('../img/stretchEnd35film.png')");
		});
}


function complete(){; 
	stretch(); 
	stretchType();
}


$(window).load(function(){
    $('div#wrapGallery').load('gallery/photo/small/ink.html', function() {
		complete();
		});
		
	$.address.change(function(event) {  
	});  
	// SMALL FORMAT //
	$('a[title=corvus]').click(function(){
		$(this).address(function() {  
			 return $(this).attr('href').replace(/^#/, '');
				});
		$('div#wrapGallery').load('gallery/photo/small/corvus.html', function() {
		complete();
			});
		});
		
	$('a[href=#plantae]').click(
		function(){
			$.address.value($(this).attr('href'));
			$('div#wrapGallery').load('gallery/photo/small/plantae.html', function() {
				complete();
			});
		});
		
	$('a[href=#music]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/music.html', function() {
				complete();
			});
		});
		
	$('a[href=#mdma]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/mdma.html', function() {
				complete();
			});
		});
		
	$('a[href=#felid]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/felid.html', function() {
				complete();
			});
		});
		
	$('a[href=#ewa]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/ewa.html', function() {
				complete();
			});
		});
		
	$('a[href=#person]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/person.html', function() {
				complete();
			});
		});
		
	$('a[href=#urban-life]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/urban-life.html', function() {
				complete();
			});
		});
		
	$('a[href=#marriage]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/marriage.html', function() {
				complete();
			});
		});
		
	$('a[href=#ink]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/ink.html', function() {
				complete();
			});
		});
		
	$('a[href=#walks]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/walks.html', function() {
				complete();
			});
		});
	
	$('a[href=#animal]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/small/animal.html', function() {
				complete();
			});
		});
		
	// MEDIUM FORMAT //
	$('a[href=#angela]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/medium/angela.html', function() {
				complete();
			});
		});
		
	$('a[href=#layers]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/medium/layers.html', function() {
				$('ul#gallery').css('width','4700px');
				complete();
			});
		});
		
	$('a[href=#photons]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/medium/photons.html', function() {
				$('ul#gallery').css('width','4700px');
				complete();
			});
		});
		
	$('a[href=#downtown]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/medium/downtown.html', function() {
				$('ul#gallery').css('width','4700px');
				complete();
			});
		});
		
	// ALT //
	
	$('a[href=#reaction]').click(
		function(){
			$('div#wrapGallery').load('gallery/photo/alt/reaction.html', function() {
				$('ul#gallery').css('width','700px');
				complete();
			});
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
			$('div#wrapGallery').css('overflow-x','scroll');
	});
	
	$('a').click(
		function(){
			$('div#wrapGallery').scrollLeft(0);
	});
	
});

