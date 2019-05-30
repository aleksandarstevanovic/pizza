(function ($) {
  $(document).ready(function(){

	// hide .navbar first
	//$(".navbar").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() >10) {



				$('nav').addClass('slidein');

			} else {


				$('nav').removeClass('slidein');

			}
		});


	});

});
  }(jQuery));
$('.broj').each(function () {
  var $this = $(this);
  console.log($this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {

    duration: 2000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
