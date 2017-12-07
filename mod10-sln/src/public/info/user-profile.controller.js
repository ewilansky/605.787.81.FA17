(function() {
    "use strict";

    angular.module('public')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['userProfile', 'ApiPath'];
    function UserProfileController(userProfile, ApiPath) {        
        var profCtrl = this;

        if (userProfile.message) {
            profCtrl.message = userProfile.message;
        } else {
            profCtrl.user = userProfile[0];
            profCtrl.menuItem = userProfile[1];
            profCtrl.basePath = ApiPath;
        }
    }
})();