(function($){$.fn.easyGalleryFocus=function(c){var d=$.extend({},$.fn.easyGalleryFocus.defaults,c);return this.each(function(a){var b=$.extend({},d,$(this).data())$(this).hover(function(){if(b.onMouseOverCallback!==null){b.onMouseOverCallback()}$(this).siblings().stop().animate({opacity:b.opacity},b.duration)},function(){if(b.onMouseOutCallback!==null){b.onMouseOutCallback()}$(this).siblings().stop().animate({opacity:b.originalOpacity},b.duration)})})}$.fn.easyGalleryFocus.defaults={onMouseOverCallback:null,onMouseOutCallback:null,duration:500,opacity:0.5,originalOpacity:1}})(jQuery);
