(function(){

	require.config({

		paths: {
			'angular' : '/bower_components/angular/angular.min',
			'ui-router' : '/bower_components/angular-ui-router/release/angular-ui-router.min',
			'ng-animate': '/bower_components/angular-animate/angular-animate.min',

			'app' : '/js/app'
		},

		shim: {

			'ng-animate': {
				deps: ['angular']
			},

			'ui-router' : {
				deps: ['angular']
			},

			'app' : {
				deps: [ 'ui-router', 'ng-animate' ]
			}

		}

	});

	require(['app'], function(){

		angular.bootstrap(document, ['app']);

	})

})();