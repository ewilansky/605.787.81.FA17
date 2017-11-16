(function () {
'use strict';

// use the MenuApp module and declare ItemsController
// on the module
angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryItems'];
function ItemsController(categoryItems) {
  var items = this;

  items.list = categoryItems.data.menu_items;
  items.category = categoryItems.data.category;

}

})();
