'use strict';

/**
 * @ngdoc service
 * @name iThoughtItwillWorksApp.Cities
 * @description
 * # Cities
 * Service in the iThoughtItwillWorksApp.
 */
angular.module('iThoughtItwillWorksApp')
  .service('Cities', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getCities(url){
      //create your deferred promise.
      var deferred = $q.defer();

      //do your thing.
      $http.get(url)
        .then(
          function(result){
            //pass
            deferred.resolve(result);
          },
          function(err){
            //fail
            deferred.reject(err);
          }
        );

      //return your promise to the user.
      return deferred.promise;
    }

    return {
      getList : getCities
    };
  });
