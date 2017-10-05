(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.foodList = "";
  $scope.foodMsg = "";

  $scope.displayMessage = function () {
    var foodMsgValue = displayMessageForString($scope.foodList);
    $scope.foodMsg = foodMsgValue;
  };

  function displayMessageForString(string) {
    var whiteSpaceRemoved = string.replace(/\s/g,'');
    var multipleCommas = whiteSpaceRemoved.indexOf(',,');

    if (string === '') {
      return 'Please enter data first.';
   } else if (multipleCommas != -1) {
       return 'Sorry, multiple commas in a row are not allowed.';
    } else {
      var items = string.split(',');
      if (items.length <= 3) {
        return 'Enjoy!';
      } else {
        return 'Too much!';
      }  
    }
  }

});

})();
