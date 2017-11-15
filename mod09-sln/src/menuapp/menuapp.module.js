(function () {
'use strict';

// create module MenuApp - depends on ui.router and data
angular
    .module('MenuApp', ['ui.router', 'Data'])
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

})();
