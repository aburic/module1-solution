(function(){
  'use strict'

angular.module('LunchCheck',[])
.controller('LuchCheckController',LuchCheckController);

LuchCheckController.$inject = ['$scope', '$filter'];
  function LuchCheckController($scope, $filter) {
    $scope.listOfFood;
    $scope.message;

    $scope.checkForFood = function(){
      if($scope.listOfFood === undefined || $scope.listOfFood === ""){
          $scope.message = "Please enter data first";
      }
      else{
        var array = $scope.listOfFood.split(',');
        var pom_array = [];
        for(var i = 0;i < array.length;i++){
          if(array[i].trim() !== ""){
            pom_array.push(array[i]);
          }
        }
        if(pom_array.length > 3){
          $scope.message="Too much!";
        }
        else{
          $scope.message="Enjoy!";
        }
          console.log(array);
      }

    }
  }
})();
