angular.module('app', ['ngResource', 'ngRoute', 'famous.angular']);

angular.module('app').config(function($routeProvider, $locationProvider){


	var routeRoleChecks = {
		admin: { 
			auth: function(mvAuth) {
				 return mvAuth.authorizeCurrentUserForRoute('admin')
		}},
		user: { 
			auth: function(mvAuth) {
				 return mvAuth.authorizeAuthenticatedUserForRoute()
		}}
	}

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false

	});
	
	$routeProvider
	
	.when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})

	.when('/design', {templateUrl: '/partials/design/design', controller: 'mvDesignCtrl'})
	.when('/design-forside-2', {templateUrl: '/partials/design/design-forside-2', controller: 'mvDesignCtrl'})

	.when('/design/tp', {templateUrl: '/partials/design/tp/main', controller: 'mvMainCtrl'})
	.when('/design/tp/blogs', {templateUrl: '/partials/design/tp/blogs', controller: 'mvBioCtrl'})
	.when('/design/tp/page', {templateUrl: '/partials/design/tp/page', controller: 'mvBioCtrl'})
	.when('/design/tp/page2', {templateUrl: '/partials/design/tp/page2', controller: 'mvBioCtrl'})
	.when('/design/tp/page3', {templateUrl: '/partials/design/tp/page3', controller: 'mvBioCtrl'})
	.when('/design/tp/portraits', {templateUrl: '/partials/design/tp/portraits', controller: 'mvBioCtrl'})
	.when('/design/tp/contact', {templateUrl: '/partials/design/tp/contact', controller: 'mvContactCtrl'})

	
	
	.when('/activites', {templateUrl: '/partials/activities/activites', 
		controller: 'mvAddActivityCtrl', resolve: routeRoleChecks.user
	})
	// .when('/addactivity', {templateUrl: '/partials/activities/add', controller: 'mvAddActivityCtrl'})
	
	.when('/admin/users', {templateUrl: '/partials/admin/user-list', 
		controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
	})
	.when('/signup', {templateUrl: '/partials/account/signup', 
		controller: 'mvSignupCtrl'
	})
	.when('/profile', {templateUrl: '/partials/account/profile', 
		controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
	})
	.when('/courses', {templateUrl: '/partials/courses/course-list', 
		controller: 'mvCourseListCtrl', resolve: routeRoleChecks.user
	});
});


angular.module('app').run(function($rootScope, $location) {
	
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		
		if(rejection === 'not authorized') {
			$location.path('/');
		}

	})
})
