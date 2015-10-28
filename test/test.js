var cityjs = require('../index');
var assert = require('assert');

describe('cityjs', function() {
  describe('nearest', function () {
    
    it('{lat:25.03,long:121.52} is close to Taipei TW', function () {
      var city = cityjs.nearest({lat:25.03,long:121.52});
      assert.equal('tw', city.country);
      assert.equal('taipei', city.city);
    });
    
    it('{lat:37.77,long:-122.41} is close to San Francisco US', function () {
      var city = cityjs.nearest({lat:37.77,long:-122.41});
      console.log(city);
      assert.equal('us', city.country);
      assert.equal('san francisco', city.city);
    });
    
  });
});