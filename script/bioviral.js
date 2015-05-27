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

jQuery.fn.hasScrollbar = function() {
    var scrollHeight = this.get(0).scrollHeight;

    //safari's scrollHeight includes padding
    if ($.browser.safari)
        scrollHeight -= parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));

    if (this.height() < scrollHeight)
        return true;
    else
        return false;
}

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
    
    // Remove .bbq-active class from any previously "active" link(s).
    $( 'a.active' ).removeClass( 'active' );	
    
    // Hide any visible ajax content.
    $( '#container	' ).children( ':visible' ).hide();
    
    // Add .bbq-active class to "active" nav link(s), only if url isn't empty.
    url && $( 'a[href="#' + url + '"]' ).addClass( 'active' );
	
    
    if ( cache[ url ] ) {
      // Since the element is already in the cache, it doesn't need to be
      // created, so instead of creating it again, let's just show it!
      cache[ url ].show();
	  
      
    } else {
      // Show "loading" content while AJAX content loads.
      $( '.bbq-loading' ).show();
      
      // Create container for this url's content and store a reference to it in
      // the cache.
      cache[ url ] = $( '<div id="insideContent"/>' )
        
        // Append the content container to the parent container.
        .appendTo( '#container' )
        
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

$(document).ready(function(){	
	$("window").scrollTo("#head");
});

$(function() { // when the DOM is ready...
    //  Move the window's scrollTop to the offset position of #now
    $(window).scrollTop($('#head').offset().top);
});

$(window).load(function(){	



	$('html').addClass('js');
	
	/* $(function(){
		var timer = setInterval(showDiv, 4000);
		var counter = 1;
		function showDiv(){
			if (counter ==0) {counter++; return;}
			
			$('a.frame','.index')
				.stop()
				.fadeOut('fast')
				.filter(function (index) { return index == counter % 20; })
				.fadeIn(1200);
			counter == 20? counter = 0 : counter++;
		}
	}); */


	//Contact Form
	$(function($){
	   $("#name").Watermark("Your name");
	   $("#email").Watermark("Your email");
	   $("#msg").Watermark("Your message");
	});

	//Check path, if url matches add class.active to div.navigation a
	$(function(){
  		 var path = location.pathname.substring(7);
   		if ( path )
    	$('.navigation a[href$="' + path + '"]').attr('class', 'active');
 	});

	Shadowbox.init();

	$(this).scroll(function(){
    $('.toTop').css("display", "block");
});

	$('.toTop').click(function(){
		$('body').scrollTo(0,{duration:3000,axis:"y", easing:'easeOutQuint'});
		});

	//Index Link Fix: Start
		$("div.index a")
	   .each(function()
	   { 
		  this.href = this.href.replace(/\.\.\//g,"/");
	   });
   //Index Link Fix: End
	//Transition between pages
	/*	
	$('.navigation a, .footer a, .header a, .box a').click(function(ev){
		ev.preventDefault();
		 var $self=$(this);
		$(".content, .contact").animate({ right: "3px", opacity: "0" }, 300, function() {
    	document.location = $self.attr('href');
  		});
	});
	*/
	
	
	

//Section Hover
	//Photography   
   $('span.box').hover(function(){
	   $('h1',this)
	   		.addClass('hover');
		$(this)
	   		.addClass('hover');
			},
		function(){
			$('h1',this)
				.removeClass('hover')
			$(this)
				.removeClass('hover')
				});
				
	$('li.medium').hover(function(){
	   $('#gallery th.medium')
	   		.addClass('hoveredCyan').removeClass('hoverCyan')},
		function(){
			$('#gallery th.medium')
				.addClass('hoverCyan').removeClass('hoveredCyan')});
				
	$('li.alternative').hover(function(){
	   $('#gallery th.alternative')
	   		.addClass('hoveredYellow').removeClass('hoverYellow')}, 
		function(){
			$('#gallery th.alternative')
				.addClass('hoverYellow').removeClass('hoveredYellow')});
//Section Hover End				
});
mouseOut();
 

