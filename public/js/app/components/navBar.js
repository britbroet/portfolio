(function() {
  angular.module('PortfolioApp')
  .component('navBar', {
    templateUrl: 'js/app/components/navbar.html',
    controller: NavBar,
    controllerAs: 'navBar'
  });


  function NavBar($rootScope, $scope, $state, $location) {
    var navBar = this;
      console.log('in navbar controller');

  }

  NavBar.$inject = ['$rootScope', '$scope', '$state', '$location'];
})()

