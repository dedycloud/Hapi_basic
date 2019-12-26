"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Package = function Package(id, regNumber, originLocation, destinationLocation, weight, cost) {
  (0, _classCallCheck2["default"])(this, Package);
  this.id = id;
  this.regNumber = regNumber;
  this.originLocation = originLocation;
  this.destinationLocation = destinationLocation;
  this.weight = weight;
  this.cost = cost;
};

var _default = Package;
exports["default"] = _default;