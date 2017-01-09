angular.module('PortfolioApp')

.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {


}])

.controller('ProjectsCtrl', ['$scope', '$state', 'ProjectService', function($scope, $state, ProjectService) {

	$scope.projectView = 'tiled';
	$scope.filters = false;
	$scope.projects = ProjectService.AllProjects;

	$scope.viewStyle = function(selection) {
		console.log('clicked!');
		projectView = selection;
		console.log('projectView: ', projectView);
	};

 }])
.controller('AboutCtrl', ['$scope', '$state', function($scope, $state) {

	$('[data-toggle="popover"]').popover();
	// $scope.projectView = 'tiled';
	// $scope.filters = false;
	// $scope.projects = ProjectService.AllProjects;

	// $scope.viewStyle = function(selection) {
	// 	console.log('clicked!');
	// 	projectView = selection;
	// 	console.log('projectView: ', projectView);
	// };
 }])

.controller('ResumeCtrl', ['$scope', '$state', function($scope, $state) {

	$scope.testing = "this is in main controller";
	
}])

.controller('ContactCtrl', ['$scope', '$state', function($scope, $state) {

	$scope.testing = "this is in contact controller";
	
}])

.controller('TimelineCtrl', ['$scope', '$state', function($scope, $state) {
	console.log('timline controller');

}])

.controller('TestingCtrl', ['$scope', '$state', function($scope, $state) {


}]);


//ref for animation

// /*
//   We're using CSS transitions for when
//   the enter and move events are triggered
//   for the element that has the .repeated-item
//   class
// */
// .filterPanel.ng-enter, .filterPanel.ng-move {
//   transition: all 0.5s linear;
//   opacity: 0;
// }


//  The ng-enter-active and ng-move-active
//  are where the transition destination properties
//  are set so that the animation knows what to
//  animate.

// .filterPanel.ng-enter.ng-enter-active,
// .filterPanel.ng-move.ng-move-active {
//   opacity: 1;
// }

// /*
//   We're using CSS keyframe animations for when
//   the leave event is triggered for the element
//   that has the .repeated-item class
// */
// .filterPanel.ng-leave {
//   animation: 0.5s my_animation;
// }

// @keyframes my_animation {
//   from { opacity:1; }
//   to { opacity:0; }
// }