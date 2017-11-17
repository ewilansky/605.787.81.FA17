(function () {
    'use strict';
    
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'src/menuapp/templates/category-items-detail.html',
        bindings: {
          items: '<'
      }
    });
    
    })();
    