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

	$('.btn-biotech').click(function(){
		hideAll();
		$('.biotech').removeClass('hide');
	});

	$('.btn-surveillance').click(function(){
		hideAll();
		$('.surveillance').removeClass('hide');
	});

	$('.btn-id').click(function(){
		hideAll();
		$('.id').removeClass('hide');
	});

	$('.btn-security').click(function(){
		hideAll();
		$('.security').removeClass('hide');
	});

	$('.btn-blackmirror').click(function(){
		hideAll();
		$('.blackmirror').removeClass('hide');
	});

	$('.btn-origins').click(function(){
		hideAll();
		$('.origins').removeClass('hide');
	});

	$('.btn-crime').click(function(){
		hideAll();
		$('.crime').removeClass('hide');
	});

// button all

	$('.btn-all').click(function(){
		$('.research-item').removeClass('hide');
	});

});

$( ".title-1" ).click(function() {
  $( ".toggle-1" ).slideToggle( "slow" );
});


// pop ups
$('.revolver').click(function() {
  $('.popup-revolver').addClass('popup-show');
  $('.popup-revolver').click(function(){
    $(this).removeClass('popup-show');
  });
});

