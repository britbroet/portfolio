(function() {
  angular.module('PortfolioApp')
  .component('resume', {
    templateUrl: 'js/app/components/resume.html',
    controller: Resume,
    controllerAs: 'resume'
  });

  function Resume($rootScope, $scope, $state, $location) {
    console.log('in resume controller');
    var resume = this;

    resume.testing = "does this work";
  }

  Resume.$inject = ['$rootScope', '$scope', '$state', '$location'];
})()
