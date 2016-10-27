'use strict';

/**
 * @ngdoc function
 * @name iThoughtItwillWorksApp.controller:ResultsController
 * @description
 * # ResultsController
 * Controller of the iThoughtItwillWorksApp
 */
angular.module('iThoughtItwillWorksApp')
  .controller('ResultsController', function ($scope, Cities, $filter) {

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

    $scope.cityData = Cities;
    $scope.getSingleFlights = function(){
      $scope.cityData.returnflights = null;
      Cities.getList('/flights.json').then(
        function (data) {
          // success
          $scope.cityData.singleflights = data;
          $scope.cityData.error = false;
        },
        function (error) {
          // fail...
          $scope.cityData.error = true;
        }
      );
    };

    $scope.getReturnFlights = function(){
      $scope.cityData.singleflights = null;
      Cities.getList('/returnflights.json').then(
        function (data) {
          // success
          $scope.cityData.returnflights = $filter('orderBy')(data, 'price', true);
          $scope.cityData.error = false;
        },
        function (error) {
          // fail...
          $scope.cityData.error = true;
        }
      );
    };


  });
