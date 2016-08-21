define(function(){

	var module = angular.module('app');

	module
		.registerService("shareService", function(){
			return {
				name: "Shared Value"
			}
		});

	module
		.registerController('ServiceController1', ["shareService", function(shareService){
			this.shareService = shareService;
		}]);

	module
		.registerController('ServiceController2', ["shareService", function(shareService){
			this.shareService1 = shareService;
		}])


});