'use strict';

/**
 * @ngdoc filter
 * @name iThoughtItwillWorksApp.filter:dateMilliseconds
 * @function
 * @description
 * # dateMilliseconds
 * Filter in the iThoughtItwillWorksApp.
 */
angular.module('iThoughtItwillWorksApp')
  .filter('dateMilliseconds', function ($filter) {
    return function (input, format) {
      var mm = Date.parse(input);
      return $filter('date')(mm, format, '+0530');
    };
  });
