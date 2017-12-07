(function() {
    "use strict";

    angular.module('public')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['userProfile'];
    function UserProfileController(userProfile) {        
        var profCtrl = this;

        // var userProfile = UserProfileService.getUserProfile();
        
        profCtrl.user = userProfile[0];
        profCtrl.menuItem = userProfile[1];
         
        console.log(profCtrl.menuItem);
    }
})();