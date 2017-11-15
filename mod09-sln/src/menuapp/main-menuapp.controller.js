(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuAppService'];
function MainMenuAppController(MenuAppService) {
  var mainMenu = this;
  mainMenu.items = [];

  mainMenu.$onInit = function () {
    MenuAppService.getItems()
    .then(function (result) {
      mainMenu.items = result;
    });
  };
}

})();
