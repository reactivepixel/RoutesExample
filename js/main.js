$(document).ready(function() {

	$('.banner').unslider();

}); //document


var App = angular.module('demoApp', ['ngRoute']);

App.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'views/main.html',
		controller: 'CoreCtrl'
	}).

	when('/project/:id', {
		templateUrl: 'views/main.html',
		controller: 'ProjectCtrl'
	}).

	when('/about', {
		templateUrl: 'views/about.html'
	});
});