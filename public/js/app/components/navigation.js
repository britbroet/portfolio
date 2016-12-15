(function() {
  angular.module('PortfolioApp')
  .component('navigation', {
    templateUrl: 'js/app/components/navigation.html',
    controller: Navigation,
    controllerAs: 'navigation'
  });


  function Navigation($rootScope, $scope, $state, $location) {
    var navigation = this;
      console.log('in navbar controller');

  }

  Navigation.$inject = ['$rootScope', '$scope', '$state', '$location'];
})()

