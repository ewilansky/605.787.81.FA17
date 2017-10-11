(function () {
'use strict';

var ToBuyList = [
  {
    name: "Ginger Roots",
    quantity: "2"
  },
  {
    name: "Avocados",
    quantity: "4"
  },
  {
    name: "Garlic Cloves",
    quantity: "2"
  },
  {
    name: "Chocolate Bars",
    quantity: "5"
  },
  {
    name: "Papayas",
    quantity: "2"
  },
  {
    name: "Mangos",
    quantity: "4"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItems();
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  //var showList = this;

  //showList.items = ShoppingListService.getItems();

  //showList.removeItem = function (itemIndex) {
    //ShoppingListService.removeItem(itemIndex);
  // };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return ToBuyList;
  };
}

})();
