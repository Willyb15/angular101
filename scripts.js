
var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){
	$scope.first = "Will";
	$scope.last = "Bryant";

	// $scope.dcClass = [
	// 	'Tristan',
	// 	'Josh',
	// 	'Bogdon',
	// 	'Laz',
	// 	'Keith',
	// 	'Will',
	// 	'Curtis',
	// 	'Joe',
	// 	'Kochan',
	// 	'Patrick',
	// 	'Jonathon',
	// 	'Jeremy'
	// ];
	


	$scope.cities = [
		{
			name: "Atlanta",
			population:500000
		},
		{
			name: "Houston",
			population:2200000
		},
		{
			name: "Portland",
			population:2000000
		}
	];


	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';
	}
	
	$scope.removeStudent = function(name){
		var i = $scope.dcClass.indexOf(name);
		console.log(i);
		$scope.dcClass.splice(i,1);
		// for(var i=0; i < $scope.dcClass.length; i++){
		// 	if (name == $scope.dcClass[i]){
		// 		$scope.dcClass.splice(i,1);
		// 	}
		// }	

	}

})