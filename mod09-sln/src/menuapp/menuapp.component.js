(function () {
'use strict';

angular.module('MenuList')
.component('menuList', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();
