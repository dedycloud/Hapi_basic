"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Transition = function Transition(id, packageItem, location, date) {
  (0, _classCallCheck2["default"])(this, Transition);
  this.id = id;
  this.packageItem = packageItem;
  this.location = location;
  this.date = date;
};

var _default = Transition;
exports["default"] = _default;