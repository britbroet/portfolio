angular.module('PortfolioApp')
.service('ProjectService', ['$http', function($http) {
  this.AllProjects = [ 
      {
        name: 'Simple jQuery Todo List',
        git: 'https://britbroet.github.io/jquery-todo-list/',
        live: '',
        image: '/img/todolist-screenshot.png',
        tech: {
          ajax: false,
          angular: false,
          auth: false,
          javascript: true,
          jquery: true,
          mongodb: false,
          node: false,
          postgres: false,
          rails: false
        },
        position: 3
      },
      {
        name: 'Progress Tracker',
        git: 'https://britbroet.github.io/progress-tracker/',
        live: '',
        image: '/img/statuscheck-preview.png',
        tech: {
          ajax: false,
          angular: false,
          auth: true,
          javascript: true,
          jquery: true,
          mongodb: false,
          node: true,
          postgres: true,
          rails: false
        },
        position: 1
      },
      {
        name: 'RoundUp',
        git: 'https://britbroet.github.io/roundup/',
        live: '',
        image: '/img/RoundUp1.png',
        tech: {
          ajax: false,
          angular: true,
          auth: true,
          javascript: true,
          jquery: true,
          mongodb: true,
          node: true,
          postgres: false,
          rails: false
        },
        position: 0
      },
      {
        name: 'ViceGrip',
        git: 'https://britbroet.github.io/progress-tracker/',
        live: '',
        image: '/img/ViceGrip1.png',
        tech: {
          ajax: false,
          angular: false,
          auth: true,
          javascript: true,
          jquery: true,
          mongodb: false,
          node: false,
          postgres: true,
          rails: true
        },
        position: 2
      }
    ];

}]);