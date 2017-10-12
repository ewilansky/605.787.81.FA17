(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('customCurrency', CurrencyFilterFactory);

ToBuyController.$inject = ['ShoppingListCheckOffService', '$filter'];
function ToBuyController(ShoppingListCheckOffService, currencyFilter, $filter) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getItems('toBuy');
  buy.quantity = 1;

  buy.moveItem = function(itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$filter'];
function AlreadyBoughtController(ShoppingListCheckOffService, $filter) {
  var bought = this;
  bought.things = ShoppingListCheckOffService.getItems('bought');
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {
      name: "Ginger Root per Lb",
      quantity: 1,
      pricePerItem: 7.25,
      totalPrice: 7.25
    },
    {
      name: "Avocados",
      quantity: 1,
      pricePerItem: 1.49
    },
    {
      name: "Garlic Cloves",
      quantity: 1, 
      pricePerItem: 1.99
    },
    {
      name: "Chocolate Bars",
      quantity: 1,
      pricePerItem: 4.50
    },
    {
      name: "Papayas",
      quantity: 1,
      pricePerItem: 4.25
    },
    {
      name: "Mangos",
      quantity: 1,
      pricePerItems: 2.25
    }
  ];
  
  var boughtList = [];

  service.moveItem = function (itemIndex) {
    // set total price for the selected item
    var item = toBuyList[itemIndex];
    item.totalPrice = item.quantity * item.pricePerItem;
    
    // remove and get the item from the tobuy array
    item = toBuyList.splice(itemIndex, 1);
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

function CurrencyFilterFactory() {
  return function (input) {
    return '$' + input;
  };
}

})();
