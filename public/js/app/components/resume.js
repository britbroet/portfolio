(function() {
  angular.module('PortfolioApp')
  .component('resume', {
    templateUrl: 'js/app/components/resume.html',
    controller: Resume,
    controllerAs: 'resume',
  });

  function Resume($rootScope, $state, $location) {
    console.log('in resume controller');
  }

  Resume.$inject = ['$rootScope', '$state', '$location'];
})()
