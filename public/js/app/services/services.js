angular.module('PortfolioApp')
.service('ProjectService', ['$http', function($http) {
  this.AllProjects = [ 
      {
        name: 'Simple jQuery Todo List (js and jquery) -svcs',
        git: 'https://britbroet.github.io/jquery-todo-list/',
        live: '',
        image: '/img/todolist-screenshot.png',
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
        image: '/img/statuscheck-preview.png',
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
        image: '/img/roundup-screenshot.png',
        tech: {
          angular: true,
          jquery: false,
          javascript: true
        }
      }
    ];

}]);