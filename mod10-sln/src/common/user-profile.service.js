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

    UserProfileService.$inject = ['MenuService'];
    function UserProfileService(MenuService) {
        var service = this;
        var user = {};

        service.getUser = function () {
            console.log('in user profile service. user name is:' +  user.firstName + ' ' + user.lastName);
            return user;
        };

        // if this returns a value then set the value for the user, otherwise, chuck it
        service.saveProfile = function (user) {
            var dishCodeUpper = user.dishCode.toUpperCase();
            console.log('in user profile service, favorite dish is: ' + dishCodeUpper);
            
            var menuItem = MenuService.tryGetMenuItem(dishCodeUpper);
            menuItem.then(function(item) {
                // if the item can't be found, remove the invalid dish code entered by the user
                if (!item) {
                    user.dishCode = "";
                    user.dishCodeResponse = "No such menu number exists.";
                } else {
                    user.dishCode = dishCodeUpper;
                    user.dishCodeResponse = dishCodeUpper + " is valid";
                    user.dishCodeValid = true;
                }

                return user;    
            });
        };
    }

})();