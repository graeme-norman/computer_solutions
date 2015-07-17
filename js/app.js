/* Angular Modules / Controllers / Config */

var app = angular.module('computerSolutions', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/main.html',
		controller: 'mainCtrl'
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'mainCtrl'
	})
}]);

// Controllers
app.controller('mainCtrl', ['$scope', function ($scope) {
	console.log('This is the main ctrl');
}]);
