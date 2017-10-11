(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItems('toBuy');

  buy.moveItem = function(itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex)
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.things = ShoppingListCheckOffService.getItems('bought');
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
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
  
  var boughtList = [];

  service.moveItem = function (itemIndex) {
    // move item from tobuy array to bought array

    // first remove and get the item from the tobuy array
    var item = toBuyList.splice(itemIndex, 1);
    // push the item onto the bought list
    boughtList.push(item[0]);
  };

  service.getItems = function (arrayToGet) {
    if (arrayToGet === 'toBuy'){
      return toBuyList;
    }
    else {
      return boughtList;
    }
  };
}

})();
