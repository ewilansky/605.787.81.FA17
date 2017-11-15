(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home view if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home view
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.html'
  })

  // Menu catgories view
  .state('menuList', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menu-categories.html',
    controller: 'MainMenuAppController as mainMenu'
  });
}

})();
