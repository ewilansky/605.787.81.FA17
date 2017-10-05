(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.foodList = "";
  $scope.foodMsg = "";
  $scope.noteMsg = "";
  $scope.customStyle = {};

  $scope.displayMessage = function () {
    var foodMsgValue = displayMessageForString($scope.foodList);
    $scope.foodMsg = foodMsgValue;
  };

  $scope.turnGreen = function() {
    $scope.customStyle.colorClass = 'box green';
  };

  $scope.turnRed = function() {
    $scope.customStyle.colorClass = 'box red';
  }

  function displayMessageForString(string) {
    var whiteSpaceRemoved = string.replace(/\s/g,'');
    var repeatingCommas = whiteSpaceRemoved.indexOf(',,');
    var cleanString = '';
    
    // clean-up white space
    cleanString = repeatingCommas != -1 ? whiteSpaceRemoved.replace(/[,\s]{2,}/,"") : whiteSpaceRemoved;
        
    // detect, report and remove repeating commas
    if (repeatingCommas != -1) {
      cleanString = whiteSpaceRemoved.replace(/[,\s]{2,}/,",");
      $scope.noteMsg = "Multiple commas in a row do not count as lunch items."
    } else {
      cleanString = whiteSpaceRemoved;
      $scope.noteMsg = "";
    }

    // final cleaning to remove leading or trailing commas
    cleanString = cleanString.replace(/(^,)|(,$)/g, "");
      
    if (cleanString === '') {
      $scope.turnRed();
      // $scope.noteMsg = "Not much of a list quite yet."
      return 'Please enter data first.';
    } else {
      var items = cleanString.split(',');
      if (items.length <= 3) {
        $scope.turnGreen();
        return 'Enjoy!';
      } else {
        $scope.turnGreen();
        return 'Too much!';
      }  
    }
  };
}

})();
