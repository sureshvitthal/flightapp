'use strict';

describe('Service: mainPageDomJs', function () {

  // load the service's module
  beforeEach(module('iThoughtItwillWorksApp'));

  // instantiate service
  var mainPageDomJs;
  beforeEach(inject(function (_mainPageDomJs_) {
    mainPageDomJs = _mainPageDomJs_;
  }));

  it('should do something', function () {
    expect(!!mainPageDomJs).toBe(true);
  });

});
