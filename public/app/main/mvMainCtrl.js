angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'C# for Sociapaths', featured: true, published: new Date('1/1/2015')},
		{name: 'Javascript for Sociapaths', featured: true, published: new Date('3/14/2015')},
		{name: 'Java for Sociapaths', featured: false, published: new Date('4/15/2015')},
		{name: 'Load testing with Visual Studio', featured: true, published: new Date('1/21/2015')},
	]
});