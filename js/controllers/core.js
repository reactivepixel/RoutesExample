App.controller('CoreCtrl', ['$scope',
	function($scope) {
		$scope.title = 'That title I showed you that one time.';
	}
])

App.controller('ProjectCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.title = 'Show me #' + $routeParams.id;
	}
])