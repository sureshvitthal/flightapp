'use strict';

/**
 * @ngdoc filter
 * @name iThoughtItwillWorksApp.filter:shortName
 * @function
 * @description
 * # shortName
 * Filter in the iThoughtItwillWorksApp.
 */
angular.module('iThoughtItwillWorksApp')
  .filter('shortname', function () {
    return function (input) {
        return input.substring(0, 3).toUpperCase();
    };
  });
