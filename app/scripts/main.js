(function($){
	$(function(){

		var mainColor = {
			h: 220,
			s: .6,
			v: 1
		}
		var randomColor = Please.make_color({
			format: 'hsv',
			colors_returned: 1
		});
		var scheme1 = Please.make_scheme(mainColor,{
			scheme_type: 'analogous',
			format: 'hex'
		});
		var scheme2 = Please.make_scheme(randomColor,{
			scheme_type: 'analogous',
			format: 'hex'
		});
		var t = new Trianglify({
			x_gradient: scheme1,
			y_gradient: scheme2
		});
		var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
		document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);

		var randomHex = Please.HSV_to_HEX(randomColor);
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.random-color { color: '+randomHex+' !important; } .random-bg { background: '+randomHex+' !important; }';
		document.getElementsByTagName('head')[0].appendChild(style);

	});
})(jQuery);