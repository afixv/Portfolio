/* Event pada Link saat di klik*/

$('.pagescroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 70
	}, 1200, 'easeInOutExpo');

	e.preventDefault();
	
});



// parall

// About
$(window).on('load', function(){

	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');

})

// Jumbotron
$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2.2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll +'%)'
	});

// Thumbnail

	if ( wScroll > $('.portfolio').offset().top - 300) {
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('tMuncul')
			}, 400 * i + 1)
		})
	}

});







