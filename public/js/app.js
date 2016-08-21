define(function(){

	var app = angular.module('app', ['ui.router', 'ngAnimate']);

	app
		.config(["$controllerProvider","$provide","$compileProvider",
			function($controllerProvider, $provide, $compileProvider){
				app.registerController = $controllerProvider.register;
				app.registerService    = $provide.service;
				app.registerDirective  = $compileProvider.directive;
			}
		])
		.config(stateConfig)
	;

	stateConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
	function stateConfig($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider
			.otherwise('/');
		$stateProvider
			.state("app", {
				templateUrl: "/tpl/main.html"
			})
			.state("app.home",{
				url: '/',
				templateUrl: "/tpl/home.html",
				controller: "HomeController as homeCtrl",
				resolve: {
					load: ['$q', function ($q) {
						var deferred = $q.defer();
						require(['/js/controllers/home.js'], function(){
							deferred.resolve();
						});
						return deferred.promise;
					}]
				}
			})
			.state("app.service", {
				url: "/service",
				templateUrl: "/tpl/service.html",
				resolve: {
					load: ["$q", function($q){
						var deferred = $q.defer();

						require(['/js/controllers/serviceExample.js'], function(){
							deferred.resolve();
						});

						return deferred.promise;
					}]
				}
			})
			.state("app.directive", {
				url: "/directive",
				templateUrl: "/tpl/directiveView.html",
				resolve: {
					load: ["$q", function($q){
						var deferred = $q.defer();

						require(['/js/controllers/directiveExample.js'], function(){
							deferred.resolve();
						});

						return deferred.promise;
					}]
				}
			})
			.state("app.repeat", {
				url: "/repeat",
				templateUrl: "/tpl/repeatView.html",
				resolve: {
					load: ["$q", function($q){
						var deferred = $q.defer();
						require(['/js/controllers/repeatExample.js'], function(){
							deferred.resolve();
						});
						return deferred.promise;
					}]
				}
			})
			.state("app.solution7", {
				url: "/solution7",
				templateUrl: "/tpl/solution7.html",
				resolve: {
					load: ["$q", function($q){
						var deferred = $q.defer();
						require(['/js/controllers/solution7.js'], function(){
							deferred.resolve();
						});
						return deferred.promise;
					}]
				}
			})
			.state("app.solution8", {
				url: "/solution8",
				templateUrl: "/tpl/solution8.html",
				resolve: {
					load: ["$q", function($q){
						var deferred = $q.defer();
						require(['/js/controllers/solution8.js'], function(){
							deferred.resolve();
						});
						return deferred.promise;
					}]
				}
			})
			.state("app.dynamicState", {
				url: '/{stateName}{optionalParam:(?:/[^/]+)?}',
				views: {
					'': {
						templateUrl: function(stateParams){
							return "/tpl/dynamic-states/"+stateParams.stateName+".html";
						}
					},
					'@app.dynamicState': {
						templateProvider: function($stateParams){
							return $stateParams.optionalParam != '' ? "<h2>This is shown when param 2 is present</h2>" : "";
						}
					}
				},
				resolve: {
					load: ['$q', '$stateParams', function ($q, $stateParams) {
						var deferred = $q.defer();
						require(['/js/controllers/dynamic-states/'+$stateParams.stateName+'.js'], function(){
							deferred.resolve();
						});
						return deferred.promise;
					}]
				}
			})
		;
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
});