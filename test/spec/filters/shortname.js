'use strict';

describe('Filter: shortName', function () {

  // load the filter's module
  beforeEach(module('iThoughtItwillWorksApp'));

  // initialize a new instance of the filter before each test
  var shortName;
  beforeEach(inject(function ($filter) {
    shortName = $filter('shortName');
  }));

  it('should return the input prefixed with "shortName filter:"', function () {
    var text = 'angularjs';
    expect(shortName(text)).toBe('shortName filter: ' + text);
  });

});
