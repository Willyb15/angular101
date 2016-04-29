# App to practice Angular.js 101
###First progarmming experience with Angular.js
###Binded data (objects) from Controller into the View
###Practiced using basic Angular directives inserting objects into HTML
####Setting up Angular... With $scope injected into "controller"
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
###Now our view has access to these variables...
```html
<html ng-app='myApp'>
<body ng-controller='myController'>
<table border=1>
	<thead>
		<th>City Name</th>
		<th>City Population</th>
	</thead>
	<tr ng-repeat="city in cities">
		<td>{{city.name}}</td>
		<td>{{city.population}}</td>
	</tr>
</table>
</body>
</html>
```


