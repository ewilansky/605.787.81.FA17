(function () {
    "use strict";
    
    // retrieve the module
    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['UserProfileService', '$stateParams'];
    function RegistrationController(UserProfileService, $stateParams) {

        var regCtrl = this;

        // hand-off registration data to the UserProfileService to save and validate the dishCode
        regCtrl.saveRegistrationData = function () {
            var reg = this;
            var user = UserProfileService.saveProfile(reg.user);
        };
    }
})();