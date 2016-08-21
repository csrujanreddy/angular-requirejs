define(function(){

	angular
		.module('app')
		.registerController('HomeController', [function(){
			this.title = "This is Home Page";
		}]);


});