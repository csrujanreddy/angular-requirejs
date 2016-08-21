define(function(){

	angular
		.module('app')
		.registerController('Solution7Controller', [function(){
			var vm = this;
			vm.input = [];
			vm.input[0] = 100;
			vm.input[1] = 100;
			vm.input[2] = 100;

			vm.sumAll = function(){
				vm.input[3] = vm.input[0] + vm.input[1] + vm.input[2];
			};
			vm.sumAll();

			vm.spread = function(){
				if(vm.input[3] < 1) return;
				var oldSum = vm.input[0] + vm.input[1] + vm.input[2];
				var changedSum = vm.input[3];

				var diff = changedSum - oldSum ;
				var percentDiff = (diff/oldSum) * 100;

				for(var i = 0; i < 3; i ++){
					var eachDiff = vm.input[i] * percentDiff / 100;
					vm.input[i] = vm.input[i] + eachDiff;
				}

			};

		}]);

});