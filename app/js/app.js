'use strict';

/* App Module */
var turfdataAdminApp = angular.module('turfdataAdminApp', [ 'ngRoute',
		'turfdataAdminControllers','turfdataAdminServices' ,'turfdataDirectives','ui.bootstrap']);

turfdataAdminApp.config([ "$routeProvider", function($routeProvider) {
	$routeProvider.when("/tache-nouveau", {
		templateUrl : "/app/views/tache-nouveau.html",
		controller : 'tacheNouveauCtrl'
	});
	$routeProvider.when("/courses", {
		templateUrl : "/app/views/courses.html",
		controller : 'courseListCtrl'
	});
	$routeProvider.when("/metriques", {
		templateUrl : "/app/views/metriques.html",
		controller : 'metriqueListCtrl'
	});
	$routeProvider.when("/cheval/:idcheval", {
		templateUrl : "/app/views/cheval.html",
		controller : 'chevalCtrl'
	});
	$routeProvider.when("/cheval", {
		templateUrl : "/app/views/cheval.html",
		controller : 'chevalCtrl'
	});
	$routeProvider.when("/audit", {
		templateUrl : "/app/views/audit.html",
		controller : 'auditCtrl'
	});
	$routeProvider.when("/anocapture", {
		templateUrl : "/app/views/anocapture.html",
		controller : 'anoCaptureCtrl'
	});
	$routeProvider.when("/camelroutes", {
		templateUrl : "/app/views/camelroutes.html",
		controller : 'camelroutesCtrl'
	});
	$routeProvider.otherwise({
		redirectTo : "/courses"
	});
} ]);
