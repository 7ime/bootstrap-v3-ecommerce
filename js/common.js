"use strict"

$(function() {

	//Слайдер
	$('#visual').pignoseLayerSlider({
		play    : '.btn-play',
		pause   : '.btn-pause',
		next    : '.btn-next',
		prev    : '.btn-prev'
	});

	//Трэндовые товары
	var maxHeight = 0;
		$(".trend-block__height").each(function () {
			var h_block = parseInt($(this).height());
			if(h_block > maxHeight) {
			maxHeight = h_block;
			};
		});
		$(".trend-block__height").height(maxHeight);

		var maxHeightBig = maxHeight + maxHeight;
		$(".trend-block__height-big").height(maxHeightBig);

	var maxH = 0;
		$(".footer-bottom__part").each(function () {
			var f_block = parseInt($(this).height());
			if(f_block > maxH) {
			maxH = f_block;
			};
		});
		$(".footer-bottom__part").height(maxH);

	//Адаптивная панель
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true   // 100% fit in a container
	});

	//Ползунок
	$( "#slider-price" ).slider({
																range: true,
																min: 0,
																max: 1500,
																values: [ 300, 1200 ],
																step: 10,
																slide: function( event, ui ) {  
																	$( "#price-min" ).val( "$" + ui.values[ 0 ] );
																	$( "#price-max" ).val( "$" + ui.values[ 1 ] );
																}
	});
	$( "#price-min" ).val( "$" + $( "#slider-price" ).slider( "values", 0 ) );
	$( "#price-max" ).val( "$" + $( "#slider-price" ).slider( "values", 1 ) );

	$( "#slider-memory" ).slider({
																range: true,
																min: 8,
																max: 64,
																values: [ 16, 54 ],
																step: 2,
																slide: function( event, ui ) {  
																	$( "#memory-min" ).val( "Гб " + ui.values[ 0 ] );
																	$( "#memory-max" ).val( "Гб " + ui.values[ 1 ] );
																}
	});
	$( "#memory-min" ).val( "Гб " + $( "#slider-memory" ).slider( "values", 0 ) );
	$( "#memory-max" ).val( "Гб " + $( "#slider-memory" ).slider( "values", 1 ) );

	$( "#slider-ram" ).slider({
																range: true,
																min: 1024,
																max: 6144,
																values: [ 2048, 5120 ],
																step: 1024,
																slide: function( event, ui ) {  
																	$( "#ram-min" ).val( "Мб " + ui.values[ 0 ] );
																	$( "#ram-max" ).val( "Мб " + ui.values[ 1 ] );
																}
	});
	$( "#ram-min" ).val( "Мб " + $( "#slider-ram" ).slider( "values", 0 ) );
	$( "#ram-max" ).val( "Мб " + $( "#slider-ram" ).slider( "values", 1 ) );

	$( "#slider-frontal" ).slider({
																range: true,
																min: 4,
																max: 16,
																values: [ 8, 12 ],
																step: 1,
																slide: function( event, ui ) {  
																	$( "#frontal-min" ).val( "Мп " + ui.values[ 0 ] );
																	$( "#frontal-max" ).val( "Мп " + ui.values[ 1 ] );
																}
	});
	$( "#frontal-min" ).val( "Мп " + $( "#slider-frontal" ).slider( "values", 0 ) );
	$( "#frontal-max" ).val( "Мп " + $( "#slider-frontal" ).slider( "values", 1 ) );

	$( "#slider-camera" ).slider({
																range: true,
																min: 4,
																max: 16,
																values: [ 8, 12 ],
																step: 1,
																slide: function( event, ui ) {  
																	$( "#camera-min" ).val( "Мп " + ui.values[ 0 ] );
																	$( "#camera-max" ).val( "Мп " + ui.values[ 1 ] );
																}
	});
	$( "#camera-min" ).val( "Мп " + $( "#slider-camera" ).slider( "values", 0 ) );
	$( "#camera-max" ).val( "Мп " + $( "#slider-camera" ).slider( "values", 1 ) );

});
