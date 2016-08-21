define(function(){

	var module = angular.module('app');

	module
		.registerDirective("autoFocus", ["$timeout", function($timeout){
			return {
				restrict: 'A',
				link: function(scope, element){
					$timeout(function(){
						element[0].focus();
					});
				}
			}
		}]);

	module
		.registerDirective("autoDetect", function(){
			function prevOf(element) {
				var parent = element.parent();
				var children = parent.children();

				var prev;
				for (var i = 1; i < children.length; i++){
					if (children[i] === element[0]) {
						prev = children[i-1];
					}
				}

				return prev;
			}
			return {
				restrict: 'A',
				require: '?ngModel',
				link: function(scope, element, attrs, ctrls) {

					var prevElement = prevOf(element);
					var nextElement = element.next('input');

					element.bind("focus", function(e){
						if(prevElement) {
							if(angular.element(prevElement).val().length < 5)
								prevElement.focus();
						}
					});

					ctrls.$parsers.push(function(value){
						if(value.length < 1){
							if (prevElement) {
								prevElement.focus();
							}
						} else if(value.length >4 ){
							if (nextElement.length === 1) {
								nextElement[0].focus();
							}
						}
						return value;
					});

					ctrls.$parsers.push(function(value){
						if(value.length > 5){
							var subString = value.substring(0,5);
							ctrls.$setViewValue(subString);
							ctrls.$render();
							return subString;
						}
						return value;
					});

					element.bind("keyup", function(event){
						if(event.which == 8 && element.val().length < 1){
							if(prevElement)
								prevElement.focus();
						}
					})

				}
			}
		});

	module
		.registerController('Solution8Controller', [function(){
			var vm = this;
		}]);

});