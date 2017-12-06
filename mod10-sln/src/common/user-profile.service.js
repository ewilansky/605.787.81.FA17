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

        service.getUser = function (user) {
            console.log('in user profile service. user name is:' +  user.firstName + ' ' + user.lastName);
            user = user;
            return user;
        };

        // if this returns true then set the value for the user, otherwise, chuck it
        service.validateDishCode = function (dishCode) {
            console.log('favorite dish is: ' + dishCode);
            return MenuService.isValidShortName(dishCode);
        };
    }

})();