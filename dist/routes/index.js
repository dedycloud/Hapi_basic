"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _location = _interopRequireDefault(require("./location.route"));

var _package = _interopRequireDefault(require("./package.route"));

var _transition = _interopRequireDefault(require("./transition.route"));

var _default = [].concat(_package["default"], _location["default"]);

exports["default"] = _default;