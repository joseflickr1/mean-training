angular.module('app').controller('mvBioCtrl', function($scope) {



    angular.element(document).ready(function(){


	  angular.element(".owl-carousel").owlCarousel({
	  	// center: false,

	    items:1,
	    loop:true,
	    nav: false,
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