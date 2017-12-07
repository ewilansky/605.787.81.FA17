(function () {
    "use strict";
    
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

        regCtrl.checkValidity = function() {
            var reg = this;
            var dishCode = reg.user.dishCode.toUpperCase();             
            
            return UserProfileService.validateCode(dishCode).then(function(user){
                reg.user.dishCodeResponse = user.dishCodeResponse;
            });                    
        };
    }
    
})();