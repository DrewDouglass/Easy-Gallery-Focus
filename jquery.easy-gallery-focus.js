/**
  * Easy Gallery Focus jQuery Plugin
  * Author: Drew Douglass 
  * Author URL: http://dev-tips.com
  * Version: 0.2
  * License: MIT 
  *
  *@params 
  * onMouseOverCallback - (optional) Callback function for when element is hovered. Default is null.
  * onMouseOutCallback - (optional) Callbacl function for when mouseout occurs on the element. Default is null.
  * duration - (optional) The time span in which the animation should take place. Default is 500 milliseconds.
  * opacity - (optional) The opacity to fade other elements to in order to focus the current element. Default is 0.5
  * originalOpacity - (optional) The original opacity you'd like to restore the elements to. Defaults to 1
  */
(function($){
	$.fn.easyGalleryFocus = function(settings){
		var opts = $.extend({}, $.fn.easyGalleryFocus.defaults,settings);
		return this.each(function(settings){
			var options = $.extend({}, opts, $(this).data())
			$(this).hover(function(){
				//if onmouseover callback passed 
				if(options.onMouseOverCallback !== null){
					options.onMouseOverCallback();
				}
				$(this).siblings().stop().animate({
					opacity: options.opacity
				},options.duration);
			}, function(){
				//if onmouseout callback passed 
				if(options.onMouseOutCallback !== null){
					options.onMouseOutCallback();
				}
				$(this).siblings().stop().animate({
					opacity: options.originalOpacity
				},options.duration);
			});
		});
	}
	$.fn.easyGalleryFocus.defaults = {
		onMouseOverCallback: null,
		onMouseOutCallback: null,
		duration: 500,
		opacity: 0.5,
		originalOpacity: 1
	}
})(jQuery);