$(document) .ready(function(){
	console.log("The page is ready!");

// toggle large class on research item

	$('.research-item') .click(function(){
		$(this).toggleClass('large');
	});

// toggle active class on nav item

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

// button filters

	$('.btn-art)').click(function(){
		hideAll();
		$('.art').removeClass('hide');
	});

	$('.btn-sculpture').click(function(){
		hideAll();
		$('.sculpture').removeClass('hide');
	});

	$('.btn-performance').click(function(){
		hideAll();
		$('.btn-performance').removeClass('hide');
	});

	$('.btn-music').click(function(){
		hideAll();
		$('.btn-music').removeClass('hide');
	});
	
// button all

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

});




