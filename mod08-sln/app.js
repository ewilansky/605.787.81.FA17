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
  narrowIt.notification = "";

  narrowIt.items = narrowIt.getMenuItems = function () {
    // clear the notification from a previous request
    narrowIt.notification = "";

    // setup a promise when calling the http service to return
    // menu items
    var promise = MenuSearchService.getMatchedMenuItems(narrowIt.searchText);

    // resolve promise, expecting a response
    promise.then(function (response) {
      var menuItems = response.data.menu_items;
      var search = narrowIt.searchText.toLowerCase();
      narrowIt.items = MenuSearchService.filterItems(menuItems, search);

      if (narrowIt.items.length === 0) {
        narrowIt.notification = "Nothing found";
      }

      narrowIt.subTitle = MenuSearchService.setSubTitle(true, narrowIt.items);
    })
    .catch(function (error) {
      console.log("Menu items service unavailable.");
    }); 
  };

  narrowIt.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
    narrowIt.subTitle = MenuSearchService.setSubTitle(false, narrowIt.items);
  };
}

function FoundItems() {
  var ddo = {
    restrict: 'EA',
    templateUrl: 'menuItem.html',
     scope: {
       items: '<',
       subTitle: '@subTitle',
       onRemove: '&'
     },
    controller: 'FoundItemsDirectiveController as found',
    bindToController: true,
    transclude: true,
    link: FoundItemsDirectiveLink
  };

  return ddo;
}

function FoundItemsDirectiveLink(scope, element, attrs, controller, transclude) {
  scope.$watch('found.foundItemsIsEmpty()', function (newValue, oldValue) {
    // the notification is empty so don't show it
    if (scope.$parent.narrowIt.notification === "") {
      return;
    }
    else {
      if (newValue === true) {
        showNotification();
      } else {
        hideNotification();
      }
    }
  });

  function showNotification() {
    var notificationElement = element.find("div.alert.alert-warning");
    notificationElement.fadeIn("slow");
  }

  function hideNotification() {
    var notificationElement = element.find("div.alert.alert-warning");
    notificationElement.fadeOut("fast");
  }
};

// controller in the ddo
function FoundItemsDirectiveController() {
  var list = this;

  // if the user did not enter a search term or there are no matches
  // then display Nothing found.
  list.foundItemsIsEmpty = function() {
    if (list.items.length == 0) {
       return true;
    }

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
      // clear-out items from any prior requests
      found = [];
      
      //no point in going any further if the user didn't enter anything
      if (search === "") {
        return found;
      }

      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].description.toLowerCase().includes(search)) {
          found.push(menuItems[i]);
        }
      }

      return found;
    }

    service.removeItem = function (itemIndex) {
      found.splice(itemIndex, 1);
    };

    service.setSubTitle = function (initialList, items) {
      var itemNum = items.length;
      if (itemNum !== 0) {
        var word = itemNum === 1 ? "item" : "items";
        var endWord = initialList ? " found" : " now listed";
        return itemNum + " menu " + word + endWord;
      }

    };

  }

})();
