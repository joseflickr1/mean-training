angular.module('app').controller('mvDesignCtrl', function($scope) {


	$scope.src = "/media/Seoul-P1-4.mp4";

    angular.element(document).ready(function(){
	  angular.element(".owl-carousel").owlCarousel({
	  	// center: false,
		navText: ['previous','next'],
	    items:1,
	    loop:true,
	    nav: true,
	    margin:0,
	    dots: false,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    // autoWidth: false,
		// autoplay:true,

	    smartSpeed: 1000

	    
	  });
	});



});