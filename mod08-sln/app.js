(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowIt = this;

  narrowIt.getMenuItems = function () {
    // setup a promise when calling the http service to return
    // menu items
    var promise = MenuSearchService.getMatchedMenuItems();

    // resolve promise, expecting a response
    promise.then(function (response) {
      narrowIt.items = response.data.menu_items;
    })
    .catch(function (error) {
      console.log("Menu items service unavailable.");
    }); 
  };

  foundItems.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    item.removeItem(itemIndex);
    // this.title = origTitle + " (" + list.items.length + " items )";
  };

}

FoundItems.$inject = []
function FoundItems() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'menuItem.html',
    scope: {

    }
  };

  return ddo;
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"), 
    });
    
    return response;
  };
}

})();
