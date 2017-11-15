(function () {
'use strict';

angular.module('MenuApp')
  .component('menuList', {
    templateUrl: 'src/menuapp/templates/menuitem-categories.html',
    bindings: {
      items: '<'
  }
});

})();
