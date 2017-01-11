angular.module('PortfolioApp')
.service('ProjectService', ['$http', function($http) {
  this.AllProjects = [ 
      {
        name: 'Todo List',
        id: 'jquery_todo',
        info: '/projects/todolist',
        git: 'https://github.com/britbroet/jquery-todo-list', 
        live: 'https://britbroet.github.io/jquery-todo-list/',
        image: '/img/todo-list-teal.jpg',
        logo: '/img/todo-logo.png',
        hover_title: 'ToDo List',
        title_class: 'todo_hover',
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
        id: 'progress_tracker',
        info: '/projects/statuscheck',
        git: 'https://github.com/britbroet/progress-tracker',
        live: 'https://progresstracker.herokuapp.com',
        image: '/img/ProgressTracker1.jpg',
        logo: '/img/status-logo.png',
        hover_title: 'STATUSCHECK',
        title_class: 'progress_tracker_hover',
        tech: {
          ajax: true,
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
        id: 'roundup',
        info: '/projects/roundup',
        git: 'https://github.com/britbroet/roundup-v2',
        live: 'http://b-roundup.herokuapp.com/',
        image: '/img/RoundUp1.jpg',
        logo: '/img/lasso-logo.png',
        hover_title: 'RoundUp',
        title_class: 'roundup_hover',
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
        id: 'vicegrip',
        info: '/projects/vicegrip',
        git: 'https://github.com/britbroet/vicegrip-v2',
        live: 'http://b-vicegrip.herokuapp.com/',
        image: '/img/ViceGrip3.jpg',
        logo: '/img/vice-logo.png',
        hover_title: 'ViceGrip',
        title_class: 'vicegrip_hover',
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