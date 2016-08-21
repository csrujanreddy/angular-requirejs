define(function(){

	angular
		.module('app')
		.registerController('State3Controller', ["$stateParams", function($stateParams){
			var vm = this;
			vm.stateName = $stateParams.stateName;
			vm.optionalParam = $stateParams.optionalParam;
		}]);


});