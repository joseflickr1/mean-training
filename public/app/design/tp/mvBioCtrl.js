angular.module('app').controller('mvBioCtrl', function($scope) {



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
	    autoHeight: true,
	    autoHeightClass: 'owl-height',
	    // autoWidth: false,
		// autoplay:true,

	    smartSpeed: 1000

	    
	  });

	  
	});




	




});