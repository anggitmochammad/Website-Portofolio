//event pada saat link di klik

$('.page-scroll').on('click', function(e){

	//tangkap isi href
	var href = $(this).attr('href');
	//tangkap elemen pada href yang diklik
	var elemenHref = $(href);

	// pindahkan scroll
	// fungsi scrolltop berfunsi memindahkan ke halaman 
	// fungsi offset berfungsi mengetahui berapa jarak elemen dari atas (.top)
	//1000 untuk mengatur kecepatan dalam hitungan MiliSecond
	$('html,body').animate({
		scrollTop: elemenHref.offset().top - 50
	},1000,'easeInOutExpo');

	e.preventDefault();

});

// paraax about
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

//paralax

$(window).scroll(function(){
	var jarakScroll=$(this).scrollTop();
	
	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+jarakScroll/4+'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+jarakScroll/2+'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+jarakScroll/1.2+'%)'
	});


	//portofolio landing paralax
	if (jarakScroll>$('.portofolio').offset().top -200) {

		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		
		
	}

});

