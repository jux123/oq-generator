var charGenApp = angular.module('charGenApp', [
    'ngRoute',
    'appControllers'
]);

charGenApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/character', {
                templateUrl: 'view/character-sheet.html',
                controller: 'CharacterViewCtrl'
            }).
            otherwise({
                redirectTo: '/character'
            });
    }
]);

charGenApp.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode();
    }
]);