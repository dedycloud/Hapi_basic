"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = require("../services");

var packageService = new _services.PackageService();
var PackageRouter = [{
  method: 'GET',
  path: '/',
  handler: function handler(req, h) {
    return h.response({
      statusCode: 2090,
      message: 'hello word'
    }).code(200);
  }
}];
var _default = PackageRouter;
exports["default"] = _default;