angular.module('PortfolioApp', ['ui.router','ui.bootstrap','ngMaterial', 'ngAnimate', 'ngMessages','material.svgAssetsCache'])
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
	})
	$stateProvider
	.state('todolist', {
		url: '/projects/todolist',
		templateUrl: 'js/app/views/projects/todolist.html',
		controller: 'ProjectsCtrl'
	})
	$stateProvider
	.state('statuscheck', {
		url: '/projects/statuscheck',
		templateUrl: 'js/app/views/projects/statuscheck.html',
		controller: 'ProjectsCtrl'
	})
	$stateProvider
	.state('vicegrip', {
		url: '/projects/vicegrip',
		templateUrl: 'js/app/views/projects/vicegrip.html',
		controller: 'ProjectsCtrl'
	})
	$stateProvider
	.state('roundup', {
		url: '/projects/roundup',
		templateUrl: 'js/app/views/projects/roundup.html',
		controller: 'ProjectsCtrl'
	})
	$stateProvider
	.state('resume', {
		url: '/resume',
		templateUrl: 'js/app/views/resume.html',
		controller: 'ResumeCtrl'
	})
	$stateProvider
	.state('about', {
		url: '/about',
		templateUrl: 'js/app/views/about.html',
		controller: 'AboutCtrl'
	})
	$stateProvider
	.state('contact', {
		url: '/contact',
		templateUrl: 'js/app/views/contact.html',
		controller: 'ContactCtrl'
	})
	$stateProvider
	.state('timeline', {
		url: '/timeline',
		templateUrl: 'js/app/views/timelineView.html',
		controller: 'TimelineCtrl'
	})
	$stateProvider
	.state('testing', {
		url: '/testing',
		templateUrl: 'js/app/views/testing.html',
		controller: 'TestingCtrl'
	});

	$locationProvider.html5Mode(true);

}]); 

