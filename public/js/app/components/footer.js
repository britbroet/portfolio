(function() {
  angular.module('PortfolioApp')
  .component('footer', {
    templateUrl: 'js/app/components/footer.html',
    controller: Footer,
    controllerAs: 'footer'
  });


  function Footer($rootScope, $scope, $state, $location) {
    var footer = this;

  }

  Footer.$inject = ['$rootScope', '$scope', '$state', '$location'];
})()
