angular.module('PortfolioApp')

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {


}])

.controller('ProjectsCtrl', ['$scope', '$state', function($scope, $state) {

	$scope.projectView = 'tiled';

	$scope.viewStyle = function(selection) {
		console.log('clicked!');
		projectView = selection;
		console.log('projectView: ', projectView);
	};

}]);

