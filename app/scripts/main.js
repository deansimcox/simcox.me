/*
 *	SIMCOX.ME 
 *	Author: Dean Simcox
 *	Version: 1.0
 */

(function($){

	'use strict';

	$(function(){

		/*
		 * SCOPED VARS
		 */

		var mainColor = {
			h: 220,
			s: 0.6,
			v: 1
		},
		randomColor = Please.make_color({
			format: 'hsv',
			saturation: 0.8,
			value: 0.6,
			colors_returned: 1
		}),
		scheme1 = Please.make_scheme(mainColor,{
			scheme_type: 'analogous',
			format: 'hex'
		}),
		scheme2 = Please.make_scheme(randomColor,{
			scheme_type: 'analogous',
			format: 'hex'
		}),
		t = new Trianglify({
			x_gradient: scheme1,
			y_gradient: scheme2,
			noiseIntensity: 0
		}),
		body = $('body'),
		pattern = t.generate( body.outerWidth() , body.outerHeight() ),
		randomHex = Please.HSV_to_HEX(randomColor),
		randomRGB = Please.HSV_to_RGB(randomColor),
		rgbString = ''+randomRGB.r+','+randomRGB.g+','+randomRGB.b;

		console.log('pattern', pattern);


		/*
		 * STARTUP FUNCTIONS
		 */
		//body.css('background-image', pattern.dataUrl);

		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '.random-color { color: '+randomHex+' !important; }';
		style.innerHTML += '.random-bg { background: '+randomHex+' !important; }';
		style.innerHTML += '.random-shadow { box-shadow: 0 0 0 5px rgba('+rgbString+', 0.9), 0 0 0 10px rgba('+rgbString+', 0.3), 0 0 0 15px rgba('+rgbString+', 0.2), 0 0 0 20px rgba('+rgbString+', 0.1), 0 0 0 22px rgba('+rgbString+', 0.05); }';
		style.innerHTML += 'html, .trianglify-pattern { background-image: '+pattern.dataUrl+'; }';

		$('head').append(style);

	});
})(jQuery);