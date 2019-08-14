$(function(){
	$(window).scroll(function(){

		if($(this).scrollTop() < 100){
			//hide the navigation bar
			$("nav").removeClass('navbar-top');
		}else{
			//show navigation bar
			$("nav").addClass('navbar-top');
		}
	});
});

$(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
});
