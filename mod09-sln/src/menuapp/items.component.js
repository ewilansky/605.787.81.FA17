(function () {
    'use strict';
    
    angular.module('MenuApp')
      .component('itemsList', {
        templateUrl: 'src/menuapp/templates/category-items-detail.html',
        bindings: {
          items: '<'
      }
    });
    
    })();
    