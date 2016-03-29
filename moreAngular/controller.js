var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){


	$scope.countriesArray =[
		{
			name: "United States",
			population:322369319,
			president: "Barack Obama",
			flagColor: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/75px-Flag_of_the_United_States.svg.png" 

		},
		{
			name: "Canada",
			population:36048521,
			president: "Justin Trudeau",
			flagColor: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/75px-Flag_of_Canada.svg.png" 
		},
		{
			name: "Argentina",
			population:43417000,
			president: "Mauricio Macri",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/75px-Flag_of_Argentina.svg.png" 
		},
		{
			name: "Spain",
			population:Number(300000000),
			president: "Mariano Rajoy",
			flagColor: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/75px-Flag_of_Spain.svg.png" 
		},
		{
			name: "China",
			population:1376049000,
			president: "Xi Jinping",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/75px-Flag_of_the_People%27s_Republic_of_China.svg.png" 
		},
		{
			name: "Russia",
			population:144192450,
			president: "Vladimir Putin",
			flagColor: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/75px-Flag_of_Russia.svg.png" 
		},
		{
			name: "South Africa",
			population:54956900,
			president: "Jacod Zuma",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/75px-Flag_of_South_Africa.svg.png" 
		},
		{
			name: "New Zealand",
			population: 4596700,
			president: "John Key",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/75px-Flag_of_New_Zealand.svg.png" 
		},
		{
			name: "Iceland",
			population:323002,
			president: "Olafur Ragnar Grimsson",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/70px-Flag_of_Iceland.svg.png" 
		},
		{
			name: "Jordan",
			population:6459000,
			president: "King Abdullah II of Jordan",
			flagColor: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/75px-Flag_of_Jordan.svg.png" 
		}
	];

		
		$scope.addCountry = function(name,population,president,flag){
			$scope.countriesArray.push({
				name: $scope.newName,
				population: $scope.newPop,
				president: $scope.newPres,
				flagColor: $scope.newFlag
			}
			);
			// $scope.addCountry = '';
		}

		$scope.removeCountry = function(i){
			$scope.countriesArray.splice(i,1);
		}

})