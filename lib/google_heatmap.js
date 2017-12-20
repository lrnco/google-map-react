'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionsHeatmap = exports.generateHeatmap = undefined;

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateHeatmap = exports.generateHeatmap = function generateHeatmap(instance, _ref) {
  var positions = _ref.positions;

  console.log(instance);
  console.log(positions);
  return new instance.visualization.HeatmapLayer({
    data: _fp2.default.reduce(function (acc, _ref2) {
      var lat = _ref2.lat,
          lng = _ref2.lng,
          _ref2$weight = _ref2.weight,
          weight = _ref2$weight === undefined ? 0 : _ref2$weight;

      acc.push({
        location: new instance.LatLng(lat, lng),
        weight: weight
      });
      return acc;
    }, [], positions)
  });
};

var optionsHeatmap = exports.optionsHeatmap = function optionsHeatmap(instance, _ref3) {
  var options = _ref3.options;
  return _fp2.default.map(function (option) {
    return instance.set(option, options[option]);
  }, Object.keys(options || {}));
};