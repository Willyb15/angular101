var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){


	$scope.countriesArray =[
		{
			name: "United States",
			population:322369319,
			president: "Barack Obama",
			flagColor: "Red, White, Blue" 

		},
		{
			name: "Canada",
			population:36048521,
			president: "Justin Trudeau",
			flagColor: "Red, White, Maple Leaf" 
		},
		{
			name: "Argentina",
			population:43417000,
			president: "Mauricio Macri",
			flagColor: "Blue, White, Yellow Sun" 
		},
		{
			name: "Spain",
			population:Number(300000000),
			president: "Mariano Rajoy",
			flagColor: "Red, Yellow" 
		},
		{
			name: "China",
			population:1376049000,
			president: "Xi Jinping",
			flagColor: "Red, Yellow Stars" 
		},
		{
			name: "Russia",
			population:144192450,
			president: "Vladimir Putin",
			flagColor: "White, Blue, Red" 
		},
		{
			name: "South Africa",
			population:54956900,
			president: "Jacod Zuma",
			flagColor: "Blue, Red, Green Blue, Yellow, White" 
		},
		{
			name: "New Zealand",
			population: 4596700,
			president: "John Key",
			flagColor: "Blue, Red, with mini GB flag" 
		},
		{
			name: "Iceland",
			population:323002,
			president: "Olafur Ragnar Grimsson",
			flagColor: "Blue, Red Cross" 
		},
		{
			name: "Jordan",
			population:6459000,
			president: "King Abdullah II of Jordan",
			flagColor: "Red, Black, White, Green" 
		}
	];

		
		$scope.addCountry = function(name,population,president,flag){
			$scope.countriesArray.push({
				name: $scope.newName,
				population: $scope.newPop,
				president: $scope.newPres,
				flagColor: $scope.newFlag,
			}
			);
			// $scope.newCountry = '';
		}

})