(function () {
	var appControllers = angular.module("controllers", ["kendo.directives"]);

	appControllers.controller('HomeController',
		function HomeController($scope, $http) {
			// Simple GET request example :

			var lseId = "2d576760-636f-11e4-8b1f-110bb7f0193e";
			var url = "http://api.everlive.com/v1/SWcNt5heb1autRP4/Course";

			$http.get(url).success(function (data, status, headers, config) {
				$scope.courses = function (arr) {
					var res = [];
					for (var i = 0, l = arr.length; i < l; i++) {
						res.push(arr[i].Name);
					}
					return res;
				}(data.Result);

			}).error(function (data, status, headers, config) {
				console.log("error");
			});
		});

})();