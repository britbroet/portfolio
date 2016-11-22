(function() {
  angular.module('PortfolioApp')
  .component('timeline', {
    templateUrl: 'js/app/components/timeline.html',
    controller: Timeline,
    controllerAs: 'timeline'
  });

  function Timeline($rootScope, $state, $location) {
    console.log('in timeline controller');
  }

  Timeline.$inject = ['$rootScope', '$state', '$location'];
})()
