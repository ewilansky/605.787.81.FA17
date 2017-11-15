(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.html'
  })

  // Premade list page
  .state('menuList', {
    url: '/menu-list',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainMenu'
  });
}

})();
