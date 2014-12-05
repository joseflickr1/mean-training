angular.module('app').factory('mvActivity', function($resource) {

		var ActivityResource = $resource('/api/activities/:id', {_id: "@id"});


		return ActivityResource;
});

