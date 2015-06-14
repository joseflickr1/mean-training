angular.module('app').controller('mvDesignCtrl', function($scope) {


	$scope.src = "/media/Seoul-P1-4.mp4";

    angular.element(document).ready(function(){
	  angular.element(".owl-carousel").owlCarousel({
	  	center: false,
	    items:1,
	    slideSpeed: 200,
	    loop:true,
	    margin:10,
	    dots: true,
	    autoWidth: true,
	    
	  });
	});



});