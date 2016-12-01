(function() {
  angular.module('PortfolioApp')
  .component('projectsList', {
    templateUrl: 'js/app/components/projectsList.html',
    controller: ProjectsList,
    controllerAs: 'projectsList'
  });


  function ProjectsList($rootScope, $state, $location) {
    var projectsList = this;
      console.log('in projectsTiled controller');

  }

  ProjectsList.$inject = ['$rootScope', '$state', '$location'];
})()

