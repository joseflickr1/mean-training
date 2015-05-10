angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, $route , mvIdentity, mvNotifier, mvAuth, $location, $famous) {

    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    var SpringTransition = $famous['famous/transitions/SpringTransition'];
    Transitionable.registerMethod('spring', SpringTransition);

    $scope.myGridLayoutOptions = {
    	dimentions : [2,3]
    };

	$scope.identity = mvIdentity;

	$scope.rotate = new Transitionable(0);
    $scope.animate = function() {
    	$scope.rotate.set(Math.PI * 4, {curve: Easing.inOutElastic, duration: 1000 * 10}) 
    };
    $scope.animate();

    $scope.translate = new Transitionable([0,0,0]);
    $scope.translateAnimate = function() {
  	    $scope.translate.set([75, 0, 0], {duration: 2000, curve: Easing.outElastic})

    };
    $scope.translateAnimate();

	$scope.scale = new Transitionable([2, 2])
	$scope.rotateA = new Transitionable(0);
    

    $scope.animateScale = function() {
  	  $scope.scale.set([1, 1], {duration: 2000, curve: Easing.outElastic});
  	};

    $scope.animateScale();

	
	$scope.signin = function(username, password) {
		mvAuth.authenticateUser(username, password).then(function(success) {
			if(success) {
				mvNotifier.notify('You have successfully signed in!');
				
				$location.path('/activites');
				$route.reload();

			} else {
				mvNotifier.notify('Username/Password combination incorrect');
			}
		})


	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			mvNotifier.notify('You have successfully signed out!');
			$location.path('/');
		})
	}

});