# App to practice Angular.js 101
###First progarmming experience with Angular.js
###Binded data (objects) from Controller into the View
###Practiced using basic Angular directives inserting objects into HTML
####Setting up angular...
```js
var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope){
	$scope.first = "Will";
	$scope.last = "Bryant";
	
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
	}
```


