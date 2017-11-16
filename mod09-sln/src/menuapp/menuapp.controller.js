(function () {
'use strict';

// use the MenuApp module and declare MainMenuAppController
// on the module
angular.module('MenuApp')
  .controller('MainMenuAppController', MainMenuAppController);

MainMenuAppController.$inject = ['MenuDataService'];
function MainMenuAppController(MenuDataService) {
  var mainMenu = this;
  //TODO: change this to mainMenu.categories and then make
  // another mainMenu array for categoryItems to be used
  // by the items component
  mainMenu.categories = [];
  mainMenu.categoryItems = [];

  mainMenu.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      mainMenu.categories = result.data;
    })
    .catch(function (error) {
      console.log("Unable to retrieve menu categories");
    });

   mainMenu.getItemsForCategory = function (categoryShortName) {
    MenuDataService.getItemsForCategory(categoryShortName)
      .then(function(result){
        // console.log(result.data);
        mainMenu.categoryItems = result.data;
      })
      .catch(function(error){
        console.log("Unable to retrieve menu items for category");
      });
    }
  };
}

})();
