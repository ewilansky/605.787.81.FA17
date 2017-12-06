(function () {
    "use strict";
    
    // retrieve the module
    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['UserProfileService', '$stateParams'];
    function RegistrationController(UserProfileService, $stateParams) {

        var regCtrl = this;

        regCtrl.getRegistrationData = function () {
            var reg = this;
            var isValidDishCode = UserProfileService.validateDishCode(reg.user.dishCode);
            UserProfileService.getUser(reg.user);
        };
    }

})();