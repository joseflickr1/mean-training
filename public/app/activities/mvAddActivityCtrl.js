angular.module('app').controller('mvAddActivityCtrl', function($scope, mvNotifier, $location, mvActivityService, mvActivity, mvIdentity) {

	$scope.activities = mvActivity.query();

	$scope.add = function() {

		var newActivity = {
			activityName: $scope.activityName,
			userId: mvIdentity.currentUser._id
		};

		
		mvActivityService.createActivity(newActivity).then(function() {
			// mvNotifier.notify('New actitvity created!');
			$location.path('/activites');

			$scope.activities = mvActivity.query();


		}, function(reason) {
			mvNotifier.error(reason);
		})
	};


	$scope.getTimeAgo = function(last_updated_time ){

		  moment.locale('no');

	     return moment(last_updated_time).fromNow();

 	};

})