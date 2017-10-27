(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowIt = this;

  // initialize searchText box to empty
  narrowIt.searchText = "";

  narrowIt.getMenuItems = function () {

  // you're here because the user clicked the button. If the searchText
  // is empty, return a message in the DDO that is "Nothing found"
  // if (narrowIt.seachText.isEmpty()) {


  // setup a promise when calling the http service to return
  // menu items
  var promise = MenuSearchService.getMatchedMenuItems(narrowIt.searchText);

  // resolve promise, expecting a response
  promise.then(function (response) {
    var menuItems = response.data.menu_items;
    var search = narrowIt.searchText.toLowerCase();
    narrowIt.items = MenuSearchService.filterItems(menuItems, search);
    })
    .catch(function (error) {
      console.log("Menu items service unavailable.");
    }); 
  };

  narrowIt.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}

FoundItems.$inject = []
function FoundItems() {
  var ddo = {
    restrict: 'EA',
    templateUrl: 'menuItem.html',
     scope: {
       list: '=myList'
     },
    // controller: 'FoundItemsDirectiveController as list',
    // bindToController: true
  };

  return ddo;
}

// controller in the ddo
function FoundItemsDirectiveController() {
  var list = this;

  // if the user did not enter a search term or there are no matches
  // then display Nothing found.
  list.isEmpty = function() {
    // TODO: add condition where search text box is empty...
    // if (list.items.length = 0) {
    //   return true;
    // }

    return false;
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var found = [];

    service.getMatchedMenuItems = function (searchText) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"), 
      });
      
      return response;
    };

    service.filterItems = function (menuItems, search) {
      for (var i=0; i < menuItems.length; i++) {
        if (menuItems[i].description.toLowerCase().includes(search)) {
          found.push(menuItems[i]);
        }
      }
      return found;
    }

    service.removeItem = function (itemIndex) {
      found.splice(itemIndex, 1);
    };
  }


})();
