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
	}).
	when('/services', {
		templateUrl: 'partials/services.html',
		controller: 'servicesCtrl'
	}).
	when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'mainCtrl'
	})
}]);

// Controllers
app.controller('mainCtrl', ['$scope', function ($scope) {
	console.log('This is the main ctrl');
}]);

app.controller('servicesCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('/data/services.json').then(function(response){
		$scope.servicesData = response.data;
	});
}])
