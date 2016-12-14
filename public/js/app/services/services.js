angular.module('PortfolioApp')
.service('ProjectService', ['$http', function($http) {
  this.AllProjects = [ 
      {
        name: 'Simple jQuery Todo List (js and jquery) -svcs',
        git: 'https://britbroet.github.io/jquery-todo-list/',
        live: '',
        image: '',
        tech: {
          angular: false,
          jquery: true,
          javascript: true
        }
      },
      {
        name: 'Progress Tracker (angular only) -svcs',
        git: 'https://britbroet.github.io/progress-tracker/',
        live: '',
        image: '',
        tech: {
          angular: true,
          jquery: false,
          javascript: false
        }
      },
      {
        name: 'Roundup (js and angular) - svcs',
        git: 'https://britbroet.github.io/roundup/',
        live: '',
        image: '',
        tech: {
          angular: true,
          jquery: false,
          javascript: true
        }
      }
    ];

}]);