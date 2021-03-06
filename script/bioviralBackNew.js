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
 
// :::: HASH DEEP LINK :::: //

$(function(){
  
  // Keep a mapping of url-to-container for caching purposes.
  var cache = {
    // If url is '' (no fragment), display this div's content.
    '': $('.active')
  };
  
  // Bind an event to window.onhashchange that, when the history state changes,
  // gets the url from the hash and displays either our cached content or fetches
  // new content to be displayed.
  $(window).bind( 'hashchange', function(e) {
    
    // Get the hash (fragment) as a string, with any leading # removed. Note that
    // in jQuery 1.4, you should use e.fragment instead of $.param.fragment().
    var url = e.fragment;
    
    // Remove .bbq-current class from any previously "current" link(s).
    $( 'a.gallery-current' ).removeClass( 'gallery-current' );	
    
    // Hide any visible ajax content.
    $( '#wrapGallery' ).children( ':visible' ).hide();
    
    // Add .bbq-current class to "current" nav link(s), only if url isn't empty.
    url && $( 'a[href="#' + url + '"]' ).addClass( 'gallery-current' );
    
    if ( cache[ url ] ) {
      // Since the element is already in the cache, it doesn't need to be
      // created, so instead of creating it again, let's just show it!
      cache[ url ].show();
      
    } else {
      // Show "loading" content while AJAX content loads.
      $( '.bbq-loading' ).show();
      
      // Create container for this url's content and store a reference to it in
      // the cache.
      cache[ url ] = $( '<div id="gallery"/>' )
        
        // Append the content container to the parent container.
        .appendTo( '#wrapGallery' )
        
        // Load external content via AJAX. Note that in order to keep this
        // example streamlined, only the content in .infobox is shown. You'll
        // want to change this based on your needs.
        .load( url, function(){
          // Content loaded, hide "loading" content.
          $( '.bbq-loading' ).hide();
        });
    }
  })
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  
});

$(window).load(function(){	

	//Index Link Fix: Start
		$("div.index a")
	   .each(function()
	   { 
		  this.href = this.href.replace(/\.\.\//g,"/");
	   });
   //Index Link Fix: End
   
   $('.hoverRed').hover(function(){
	    $(this).addClass('hoveredRed');
		$('.targetRed h1, .targetRed ul, .targetRed a').addClass('bgRed');
		},
		function(){
			$(this).removeClass('hoveredRed');
			$('.targetRed h1, .targetRed ul, .targetRed a').removeClass('bgRed');
		});
		
	$('.hoverYellow').hover(function(){
		$(this).addClass('hoveredYellow');
		$('.targetYellow h1, .targetYellow ul, .targetYellow a').addClass('bgYellow');
		},
		function(){
			$(this).removeClass('hoveredYellow');
			$('.targetYellow h1, .targetYellow ul, .targetYellow a').removeClass('bgYellow');
		});
		
	$('.hoverCyan').hover(function(){
		$(this).addClass('hoveredCyan');
		$('.targetCyan h1, .targetCyan ul, .targetCyan a').addClass('bgCyan');
		},
		function(){
			$(this).removeClass('hoveredCyan');
			$('.targetCyan h1, .targetCyan ul, .targetCyan a').removeClass('bgCyan');
		});
		
	
		
		
		
	//Scroll Buttons
		//Bottom:HANDS
	$('#scrollerBottomRight').hover(function(){
		$(this).animate({"right": "-=10px"}, "fast").animate({"right": "+=10px"}, "fast");
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('../img/handRightHover.png')");
			$(this).animate({"right": "-=10px"}, "fast").animate({"right": "+=10px"}, "fast");
			$('#wrapGallery').animate({ scrollLeft: "+=333" }, 600);		
			});
		},
		function(){
			$('#scrollerBottomRight').css({"right": "10px"})
			.stop(true).stopTime()
			.css("background-image", "url('../img/handRight.png')");
			
		});
		
	$('#scrollerBottomLeft').hover(function(){
		$(this).animate({"left": "-=10px"}, "fast").animate({"left": "+=10px"}, "fast");
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('../img/handLeftHover.png')");
			$(this).animate({"left": "-=10px"}, "fast").animate({"left": "+=10px"}, "fast");
			$('#wrapGallery').animate({ scrollLeft: "-=333" }, 600);		
			});
		},
		function(){
			$('#scrollerBottomLeft').css({"left": "235px"})
			.stop(true).stopTime()
			.css("background-image", "url('../img/handLeft.png')");
		});
		
		//Top:ARROWS
		$('#scrollerTopRight').hover(function(){
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('../img/arrowRightHover.png')");
			$('#wrapGallery').animate({ scrollLeft: "+=333" }, 600);		
			});
		},
		function(){
			$('#scrollerTopRight').css({"right": "10px"})
			.stop(true).stopTime()
			.css("background-image", "url('../img/arrowRight.png')");
			
		});
		
	$('#scrollerTopLeft').hover(function(){
		$(this).everyTime( 600, function (){
			$(this).css("background-image", "url('../img/arrowLeftHover.png')");
			$('#wrapGallery').animate({ scrollLeft: "-=333" }, 600);		
			});
		},
		function(){
			$('#scrollerTopLeft').css({"left": "235px"})
			.css("background-image", "url('../img/arrowLeft.png')")
			.stop(true).stopTime();
			console.log('hey');
			
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
			$('div#wrapGallery').css('overflow-x','hidden');
	});
	
	$('a').click(
		function(){
			$('div#wrapGallery').scrollLeft(0);
	});

});
mouseOut();
 

