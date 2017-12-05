(function () {
    "use strict";
    
    // retrieve the module
    angular.module('public')
        .controller('RegistrationController', RegistrationController)
        .service('UserProfileService', UserProfileService);

    // eventually, will want to inject menu_items from
    // https://ewilansky-course5.herokuapp.com/menu_items.json
    // given the entire list of short_name values, validate that the 
    // shortname they entered is real and if so, use it or tell the user it's
    // not real. Use the menu-items.controller.js injection pattern when you're ready 
    // to add this functionality. 
    RegistrationController.$inject = ['UserProfileService', '$stateParams'];
    function RegistrationController(UserProfileService, $stateParams) {

        var regCtrl = this;
        var user = $stateParams;

        regCtrl.saveRegistration = function () {
            var reg = this;
            UserProfileService.saveRegistration(reg.user);
        };
    }

    function UserProfileService() {
        var service = this;

        // user object
        var user = {};

        service.saveRegistration = function (user) {
            user = user;
            console.log(user);
        };

        service.getUser = function () {
            return user;
        };
    }

})();