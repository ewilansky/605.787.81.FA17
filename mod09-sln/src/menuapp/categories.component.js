(function () {
'use strict';

angular.module('MenuApp')
  .component('menuList', {
    templateUrl: 'src/menuapp/templates/categories-list.html',
    bindings: {
      categories: '<'
  }
});

})();