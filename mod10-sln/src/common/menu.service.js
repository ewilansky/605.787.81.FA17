(function () {
"use strict";

angular.module('common')
  .service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  // TODO: get the shortname from the registration form and send it over here from the userprofile service
  // validate the short name and return true of false to the userprofile service validateDishCode method
  // just construct the shortname, like so, given the input value
  // first check that the value is either 2 or 3 characters, then try the endpoint...
  // https://ewilansky-course5.herokuapp.com/menu_items/{shortName}.json. If it returns status 500, then it's not real
  // for image, check if image_present is true and then make this call:
  // how to get the image: https://ewilansky-course5.herokuapp.com/images/{shortName}.jpg
  service.tryGetMenuItem = function(shortName) {
    // var config = {};
    // config.cache = true;
    if (shortName.length >= 2 && shortName.length <= 3) {
      console.log('short name in menu service is:' + shortName);
      
      return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
          console.log('response from menu service:' + response.data);
          return response.data;
      }).catch(function (response) {
          // console.log("failure response status is:" + response.status);
          return false;
      });
    } 
  };
}



})();
