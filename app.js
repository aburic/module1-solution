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
        for(var i=0; i< array.length;i++){
          if(array[i].trim() === ""){
            array.splice(i,1);
          }
        }
        if(array[array.length-1].trim() === ""){
            array.splice(array.length-1,1);
        }
        if(array.length > 3){
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
