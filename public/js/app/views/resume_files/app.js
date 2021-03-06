angular.module('PortfolioApp', ['ui.router','ui.bootstrap','ngMaterial','ngMessages','material.svgAssetsCache'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/'); // usually goes to a 404 route

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'js/app/views/home.html'
	})
	$stateProvider
	.state('welcome', {
		url: '/',
		templateUrl: 'js/app/views/welcome.html'
	})
	$stateProvider
	.state('projects', {
		url: '/projects',
		templateUrl: 'js/app/views/projects.html',
		controller: 'ProjectsCtrl'
	});

	$locationProvider.html5Mode(true);

}]); 

