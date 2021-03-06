(function () {
'use strict';

// declare this service on the Data module
angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

  service.getAllCategories = function() {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });

    return response;
  };

  service.getItemsForCategory = function(short_name){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: short_name
      }
    });

    return response;
  };
}

})();
