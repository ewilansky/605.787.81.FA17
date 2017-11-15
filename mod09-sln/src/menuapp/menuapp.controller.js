(function () {
'use strict';

// use the MenuApp module and declare MainMenuAppController
// on the module
angular.module('MenuApp')
  .controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['MenuDataService'];
function MainMenuAppController(MenuDataService) {
  var mainMenu = this;
  mainMenu.items = [];

  mainMenu.$onInit = function () {
    MenuDataService.getCategories()
    .then(function (result) {
      mainMenu.items = result.data;
    });
  };
}

})();
