# cityjs

Inspired by [wingchen/citipy](https://github.com/wingchen/citipy) , a simple npm module to find the nearest city by coordinates 

## Credits
- KD-TREE module [luk-/node-kdt](https://github.com/luk-/node-kdt)
- City coordinates data from [Maxmind](www.maxmind.com/en/free-world-cities-database)
- Convert coordinates csv to json [Keyang/node-csvtojson](https://github.com/Keyang/node-csvtojson)

## Basic use
Put the module in node_modules directory and then **npm install** to install dependency

```javascript
var cityjs = require('cityjs');

var city = cityjs.nearest({lat:37.77,long:-122.41});
console.log(city);
//{"country":"us","city":"san francisco","lat":37.775,"long":-122.4183333}
```

## Unit test

``` bash
  $ npm install -g mocha
  $ npm test
```
