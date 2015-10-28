var kdt = require('kdt'); // kd tree
var cities = require('./cities.json');

// util
var distance = function(a, b){
  return Math.pow(a.lat - b.lat, 2) +  Math.pow(a.long - b.long, 2);
}

var ascend = function(a,b){ return a[1] - b[1];}

// build kd tree for cords
var tree = kdt.createKdTree(cities, distance, ['lat', 'long'])

module.exports = {
  nearest : function(coords){
    return tree.nearest(coords, 4).sort(ascend)[0][0];
  }
}