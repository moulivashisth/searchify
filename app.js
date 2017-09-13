var app = angular.module("MouliApp", []);
app.controller("MolsCTRL", ["$scope", "MVCService", function ($scope ,MVCService) {

   

   $scope.callFunction = function () {

       $scope.Cities = MVCService.getData($scope);
   };

}]);