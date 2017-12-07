(function () {
    "use strict";

    angular.module('common')
        .service('UserProfileService', UserProfileService);

    // eventually, will want to inject menu_items from
    // https://ewilansky-course5.herokuapp.com/menu_items.json
    // given the entire list of short_name values, validate that the 
    // shortname they entered is real and if so, use it or tell the user it's
    // not real. Use the menu-items.controller.js injection pattern when you're ready 
    // to add this functionality. Also, this service method will be called from registration.controller.js

    UserProfileService.$inject = ['MenuService', '$http', 'ApiPath'];
    function UserProfileService(MenuService, $http, ApiPath) {
        var service = this;
        var currentUser = {};

        service.getUserProfile = function () {
            console.log('in user profile service. user name is:' +  currentUser.firstName + ' ' + currentUser.lastName);
            var menuItem = MenuService.tryGetMenuItem(currentUser.dishCode);
            menuItem.then(function(item) {
                console.log('inside of user profile ' + item);
            });
             
            // return [currentUser, menuItem];
            var shortName = currentUser.shortName;
            var menuItem = {};

            // return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
            //     console.log('response from menu service:' + response.data);
            //     menuItem = response.data;
            //     return [currentUser, menuItem];
            // }).catch(function (response) {
            //     console.log("failure response status is:" + response.status);
            //     return false;
            // });
        };

        // if this returns a value then set the value for the user, otherwise, chuck it
        service.saveProfile = function (user) {
            user.dishCode = user.dishCode.toUpperCase();
            console.log('in user profile service, favorite dish is: ' + user.dishCode);
            
            var menuItem = MenuService.tryGetMenuItem(user.dishCode);
            menuItem.then(function(item) {
                // if the item can't be found, remove the invalid dish code entered by the user
                if (!item) {
                    // clear the dishCode
                    user.dishCode = "";
                    user.dishCodeValid = false;
                    user.dishCodeResponse = "No such menu number exists.";
                    user.saveResponse = "Your information has been saved (except for the invalid dish value).";
                } else {
                    user.dishCodeResponse = "Your favorite dish is: " + item.name + ' (' + user.dishCode + ')'; 
                    user.dishCodeValid = true;
                    user.saveResponse = "Your information has been saved.";
                }

                currentUser = user;

                return user;    
            });
        };
    }

})();