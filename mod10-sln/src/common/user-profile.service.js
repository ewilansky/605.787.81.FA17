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
    function UserProfileService(MenuService) {
        var service = this;
        var currentUser = {};

        service.getUserProfile = function () {
            if (angular.equals({}, currentUser)) {
                currentUser.message = 'Not Signed Up Yet'; 
                return currentUser;
            } else if (currentUser.message) {
                return currentUser;
            } else {                
                var userProfile = MenuService.tryGetMenuItem(currentUser.dishCode);
                return userProfile.then(function(item) {
                    return [currentUser, item];
                });
            }
        };

        // if this returns a value then set the value for the user, otherwise, chuck it
        service.saveProfile = function (user) {
            user.dishCode = user.dishCode.toUpperCase();
            
            var menuItem = MenuService.tryGetMenuItem(user.dishCode);
            menuItem.then(function(item) {
                // if the item can't be found, remove the user-entered invalid dish code
                if (!item) {
                    user.dishCode = "";
                    user.dishCodeResponse = "No such menu number exists.";
                    user.saveResponse = "Your information has been saved (except for the invalid dish value).";
                } else {
                    user.dishCodeResponse = "Your favorite dish is: " + item.name + ' (' + user.dishCode + ')'; 
                    user.saveResponse = "Your information has been saved.";
                }

                // save the user to this service for reuse
                currentUser = user;

                return user;    
            });
        };

        // check if the dishCode exists and return messages depending on the outcome
        service.validateCode = function (dishCode) {
            var code = dishCode.toUpperCase();
            var user = {};
            
            var menuItem = MenuService.tryGetMenuItem(code);
            return menuItem.then(function(item) {
                if (!item) {
                    user.dishCode = "";
                    user.dishCodeResponse = "No such menu number exists.";
                } else {
                    user.dishCodeResponse = "Your favorite dish is: " + item.name + ' (' + item.short_name + ')'; 
                }

                return user;    
            });
        };
    }

})();