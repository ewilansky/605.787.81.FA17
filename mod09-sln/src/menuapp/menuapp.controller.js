(function () {
'use strict';

// use the MenuApp module and declare MainMenuAppController
// on the module
angular.module('MenuApp')
  .controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['categories'];
function MainMenuAppController(categories) {
  var mainMenu = this;

  mainMenu.categories = categories.data;
}

})();
