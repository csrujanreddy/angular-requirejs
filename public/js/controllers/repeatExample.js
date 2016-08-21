define(function(){

	angular
		.module('app')
		.registerController('RepeatController', [function(){
			var vm = this;

			vm.orderBy = "name";

			vm.persons = [
				{ name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
				{ name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
				{ name: 'Estefania', email: 'estefania@email.com', age: 21, country: 'Argentina' },
				{ name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
				{ name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
				{ name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
				{ name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
				{ name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
				{ name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
				{ name: 'Nicolas',   email: 'nicole@email.com',    age: 43, country: 'Colombia' },
				{ name: 'Srujan',   email: 'srujan@email.com',    age: 26, country: 'China' },
				{ name: 'Reddy',   email: 'reddy@email.com',    age: 25, country: 'South Africa' },
				{ name: 'ganehsh',   email: 'ganesh@email.com',    age: 22, country: 'Malaysia' },
				{ name: 'Munisif',   email: 'munisif@email.com',    age: 21, country: 'Singapore' },
				{ name: 'Kumar',   email: 'kumar@email.com',    age: 23, country: 'Australia' },
				{ name: 'Hemanth',   email: 'hemanth@email.com',    age: 22, country: 'Colombia' },
				{ name: 'suresh',   email: 'suresh@email.com',    age: 22, country: 'India' },
				{ name: 'balu',   email: 'balu@email.com',    age: 22, country: 'India' },
				{ name: 'putta',   email: 'putta@email.com',    age: 24, country: 'India' },
				{ name: 'gurappa',   email: 'gurappa@email.com',    age: 21, country: 'India' },
				{ name: 'guru',   email: 'guru@email.com',    age: 22, country: 'SouthAfrica' },
				{ name: 'komali',    email: 'komali@email.com',    age: 32, country: 'SriLanka' },
				{ name: 'naresh', email: 'naresh@email.com', age: 20, country: 'Japan' },
				{ name: 'Arvind',    email: 'Arvind@email.com',    age: 23, country: 'China' },
				{ name: 'Somu',  email: 'Somu@email.com',  age: 28, country: 'Australia' },
				{ name: 'Sampurnesh',  email: 'sampurnesh@email.com',  age: 30, country: 'United States' },
				{ name: 'Bolt',    email: 'bolt@email.com',    age: 32, country: 'Jamaika' },
				{ name: 'Saina',   email: 'saina@email.com',   age: 27, country: 'India' },
				{ name: 'Karthik',   email: 'karthik@email.com',   age: 25, country: 'India' },
				{ name: 'Sania',   email: 'sania@email.com',    age: 33, country: 'Chaina' },
				{ name: 'Srikanth',   email: 'srikanth@email.com',    age: 26, country: 'England' },
				{ name: 'George',   email: 'george@email.com',    age: 25, country: 'South Koria' },
				{ name: 'John',   email: 'john@email.com',    age: 32, country: 'Malaysia' },
				{ name: 'Mouni',   email: 'mouni@email.com',    age: 21, country: 'Singapore' },
				{ name: 'Mickey',   email: 'mickey@email.com',    age: 22, country: 'India' },
				{ name: 'Hema',   email: 'hema@email.com',    age: 22, country: 'Japan' },
				{ name: 'sireesh',   email: 'sireesh@email.com',    age: 21, country: 'England' },
				{ name: 'Narmad',   email: 'narmad@email.com',    age: 22, country: 'Colombia' },
				{ name: 'Rakesh',   email: 'rakesh@email.com',    age: 24, country: 'India' },
				{ name: 'Prabha',   email: 'prabha@email.com',    age: 20, country: 'Australia' },
				{ name: 'Jessie',   email: 'jessie@email.com',    age: 42, country: 'Japan' },
				{ name: 'Abbas',    email: 'abbas@email.com',      age: 12, country: 'United States' },
				{ name: 'Amrin',    email: 'amrin@email.com',    age: 21, country: 'India' },
				{ name: 'Faiza', email: 'faiza@email.com', age: 26, country: 'Colombo' },
				{ name: 'Aswin',    email: 'aswin@email.com',    age: 24, country: 'England' },
				{ name: 'Mohammand',  email: 'mohammad@email.com',  age: 20, country: 'India' },
				{ name: 'Buelah',  email: 'buelah@email.com',  age: 80, country: 'United States' },
				{ name: 'Nikolus',    email: 'nikolus@email.com',    age: 17, country: 'SriLanka' },
				{ name: 'Nithin',   email: 'nithin@email.com',   age: 34, country: 'Australia' },
				{ name: 'Clark',   email: 'clark@email.com',   age: 35, country: 'United States' }
			];

		}]);

});