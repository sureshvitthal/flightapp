'use strict';

/**
 * @ngdoc overview
 * @name iThoughtItwillWorksApp
 * @description
 * # iThoughtItwillWorksApp
 *
 * Main module of the application.
 */
angular
  .module('iThoughtItwillWorksApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngAutocomplete'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/listing', {
        templateUrl: 'views/results.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
