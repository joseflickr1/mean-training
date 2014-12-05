angular.module('app').controller('mvAddActivityCtrl', function($scope, mvNotifier, $location, mvActivityService, mvActivity) {

	$scope.activities = mvActivity.query();

	$scope.add = function() {
		var newActivity = {
			activityName: $scope.activityName
		};

		
		mvActivityService.createActivity(newActivity).then(function() {
			mvNotifier.notify('New actitvity created!');
			$location.path('/activites');
		}, function(reason) {
			mvNotifier.error(reason);
		})
	}
})