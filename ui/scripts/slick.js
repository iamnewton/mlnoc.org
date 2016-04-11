$( '#navigation' ).on( 'click', 'a', function( evt ) {
	evt.preventDefault();
	var $anchor = $( this );
	$( 'html, body' ).stop().animate({
		scrollTop : $( $anchor.attr( 'href' ) ).offset().top
	}, 1000 );
});
$( 'a[href="#get-involved"]' ).on( 'click', function( evt ) {
	evt.preventDefault();
	var $id = $( this );
	$( $id.attr( 'href' ) ).animate({
		height : 'toggle'
	}, 750, function() {
		$id.fadeOut().delay( 200 ).remove();
	});
});
$( '#carousel' ).slick({
	infinite : false,
	nextArrow : '<button type="button" class="slick-next"><svg class="icon icon-right-arrow"><use xlink:href="#icon-right-arrow"></use></svg></button>',
	prevArrow : '<button type="button" class="slick-prev"><svg class="icon icon-left-arrow"><use xlink:href="#icon-left-arrow"></use></svg></button>',
	responsive : [
		{
			breakpoint : 910,
			settings : {
				slidesToShow : 2
			}
		},
		{
			breakpoint : 617,
			settings : {
				slidesToShow : 1
			}
		}
	],
	slidesToShow : 3,
	slidesToScroll : 1,
	speed : 300
});
$( '#gallery' ).slick({
	autoplay : true,
	arrows : false,
	responsive : [
		{
			breakpoint : 910,
			settings : {
				slidesToShow : 2
			}
		},
		{
			breakpoint : 617,
			settings : {
				slidesToShow : 1
			}
		}
	],
	slidesToShow : 3,
	slidesToScroll : 1,
	speed : 300,
	variableWidth : true
});
