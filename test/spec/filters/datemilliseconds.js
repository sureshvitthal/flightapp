'use strict';

describe('Filter: dateMilliseconds', function () {

  // load the filter's module
  beforeEach(module('iThoughtItwillWorksApp'));

  // initialize a new instance of the filter before each test
  var dateMilliseconds;
  beforeEach(inject(function ($filter) {
    dateMilliseconds = $filter('dateMilliseconds');
  }));

  it('should return the input prefixed with "dateMilliseconds filter:"', function () {
    var text = 'angularjs';
    expect(dateMilliseconds(text)).toBe('dateMilliseconds filter: ' + text);
  });

});
