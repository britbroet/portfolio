(function() {
  angular.module('PortfolioApp')
  .component('timeline', {
    templateUrl: 'js/app/components/timeline.html',
    controller: Timeline,
    controllerAs: 'timeline'
  });

  function Timeline($rootScope, $scope, $state, $location) {
    console.log('in timeline controller');
    var timeline = this;


  
  // Variables - Public
  timeline.filter = {};
  timeline.wines = [ //was wines
    {name: 'Skill A', category: 'red', category: 'white'},
    {name: 'Skill B', category: 'red'},
    {name: 'Skill C', category: 'white'},
    {name: 'Skill D', category: 'red'},
    {name: 'Skill E', category: 'red'},
    {name: 'Skill F', category: 'white'},
    {name: 'Skill G', category: 'champagne'},
    {name: 'Skill H', category: 'champagne'}    
  ];

  timeline.cats = 'sup';
  var cats = 'sup var';

  
//   // Functions - Public
  timeline.filterByProperties = filterByProperties;
  timeline.getValuesFor = getValuesFor;
  
//   // Functions - Definitions
  function filterByProperties(wine) {
    var activeFilterProps = Object.
      keys(timeline.filter).
      filter(function (prop) { return !noFilter(timeline.filter[prop]); });

//     // Use this snippet for matching with AND
    return activeFilterProps.
      every(function (prop) { return timeline.filter[prop][wine[prop]]; });
    // Use this snippet for matching with OR
    //return !activeFilterProps.length || activeFilterProps.
    //  some(function (prop) { return self.filter[prop][wine[prop]]; });
  }
    
  function getValuesFor(prop) {
    return (timeline.wines || []).
      map(function (wine) { return wine[prop]; }).
      filter(function (value, idx, arr) { return arr.indexOf(value) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
 }




  

  Timeline.$inject = ['$rootScope', '$scope', '$state', '$location'];
})()
