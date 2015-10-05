var appControllers = angular.module('appControllers', []);

appControllers.controller('CharacterViewCtrl', ['$scope', 'characterService',
    function($scope, characterService) {

       $scope.generate = function () {
            $scope.character = characterService.generateCharacter($scope.reRoll);
       };
    }

]);
