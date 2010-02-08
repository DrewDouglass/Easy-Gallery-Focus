/**
  * Easy Gallery jQuery Plugin
  * Author: Drew Douglass 
  * Author URL: http://dev-tips.com
  * Version: 0.1
  * License: MIT 
  *
  */
(function($){
	$.fn.easyGallery = function(settings){
		var opts = $.extend({}, $.fn.easyGallery.defaults,settings);
		return this.each(function(settings){
			var options = $.extend({}, opts, $(this).data())
			$(this).hover(function(){
				$(this).siblings().stop().animate({
					opacity: options.opacity
				},options.duration);
			}, function(){
				$(this).siblings().stop().animate({
					opacity: options.originalOpacity
				},options.duration);
			});
		});
	}
	$.fn.easyGallery.defaults = {
		duration: 500,
		opacity: 0.5,
		originalOpacity: 1
	}
})(jQuery);
