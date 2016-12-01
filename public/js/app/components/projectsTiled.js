(function() {
  angular.module('PortfolioApp')
  .component('projectsTiled', {
    templateUrl: 'js/app/components/projectsTiled.html',
    controller: ProjectsTiled,
    controllerAs: 'projectsTiled'
  });


  function ProjectsTiled($rootScope, $state, $location) {
    var projectsTiled = this;
      console.log('in projectsTiled controller');

  }

  ProjectsTiled.$inject = ['$rootScope', '$state', '$location'];
})()

