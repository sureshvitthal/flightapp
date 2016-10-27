'use strict';

/**
 * @ngdoc function
 * @name iThoughtItwillWorksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iThoughtItwillWorksApp
 */
angular.module('iThoughtItwillWorksApp')
  .controller('MainController', function ($scope, Cities, $location) {
    //flight from options
    $scope.result1 = '';
    $scope.options1 = {
      country: 'in',
      types: '(cities)'
    };
    $scope.details1 = '';

    //flght to options
    $scope.result2 = '';
    $scope.options2 = {
      country: 'in',
      types: '(cities)'
    };
    $scope.details2 = '';

    $scope.cityData = Cities;//using service to share data between routes
    $scope.getSingleFlights = function(){
      $scope.returnflights = null;
      Cities.getList('/flights.json').then(
        function (data) {
          // success
          $scope.cityData.singleflights = data;
          $scope.cityData.error = false;

          $location.path('/listing');
          $scope.$apply();
        },
        function (error) {
          // fail...
          $scope.cityData.error = true;
        }
      );
    };

    $scope.getReturnFlights = function(){
      $scope.singleflights = null;
      Cities.getList('/returnflights.json').then(
        function (data) {
          // success
          $scope.cityData.returnflights = data;
          $scope.cityData.error = false;

          $location.path('/listing');
          $scope.$apply();

        },
        function (error) {
          // fail...
          $scope.cityData.error = true;
        }
      );
    };


  });
