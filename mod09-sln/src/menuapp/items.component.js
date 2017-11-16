(function () {
    'use strict';
    
    angular.module('MenuApp')
      .component('menuItem', {
        templateUrl: 'src/menuapp/templates/category-items.html',
        bindings: {
          items: '<'
      }
    });
    
    })();
    