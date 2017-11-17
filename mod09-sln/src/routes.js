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
    controller: 'MainMenuAppController as mainMenu',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService){
        return  MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('menuItems', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/category-items.html',
    controller: 'ItemsController as items',
    resolve: {
      categoryItems: ['$stateParams', 'MenuDataService', 
              function ($stateParams, MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  });
}

})();
