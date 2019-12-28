"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _location = _interopRequireDefault(require("../schema/location.schema"));

var _package = _interopRequireDefault(require("../schema/package.schema"));

var _transition = _interopRequireDefault(require("../schema/transition.schema"));

var _login = _interopRequireDefault(require("../schema/login.schema"));

var _default = {
  LocationSchema: _location["default"],
  PackageSchema: _package["default"],
  TransitionSchema: _transition["default"],
  LoginSchema: _login["default"]
};
exports["default"] = _default;