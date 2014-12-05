angular.module('app').factory('mvActivityService', function($http, mvIdentity, $q, mvActivity) {
	return {

		createActivity: function(newActivityData) {

			var newActivity = new mvActivity(newActivityData);
			var dfd = $q.defer();

			newActivity.$save().then(function() {

				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			})

			return dfd.promise;
		}
	}
})