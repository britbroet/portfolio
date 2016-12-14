(function() {
  angular.module('PortfolioApp')
  .component('projectsTiled', {
    templateUrl: 'js/app/components/projectsTiled.html',
    controller: ProjectsTiled,
    controllerAs: 'projectsTiled'
  });


  function ProjectsTiled($rootScope, $state, $location, ProjectService) {
    var projectsTiled = this;
      console.log('in projectsTiled controller');

      projectsTiled.js = $ProjectsCtrl.js;

      projectsTiled.projects = ProjectService.AllProjects;
    // projectsTiled.projects = [ 
    //   {
    //     name: 'Simple jQuery Todo List (js and jquery)',
    //     git: 'https://britbroet.github.io/jquery-todo-list/',
    //     live: '',
    //     image: '',
    //     tech: {
    //       angular: false,
    //       jquery: true,
    //       javascript: true
    //     }
    //   },
    //   {
    //     name: 'Progress Tracker (angular only)',
    //     git: 'https://britbroet.github.io/progress-tracker/',
    //     live: '',
    //     image: '',
    //     tech: {
    //       angular: true,
    //       jquery: false,
    //       javascript: false
    //     }
    //   },
    //   {
    //     name: 'Roundup (js and angular)',
    //     git: 'https://britbroet.github.io/roundup/',
    //     live: '',
    //     image: '',
    //     tech: {
    //       angular: true,
    //       jquery: false,
    //       javascript: true
    //     }
    //   }
    // ];


  }

  ProjectsTiled.$inject = ['$rootScope', '$state', '$location', 'ProjectService'];
})()

