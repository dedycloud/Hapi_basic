"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = require("../services");

var transitionService = new _services.TransitionService();
var TransitionRouter = [{
  method: 'GET',
  path: '/transition',
  handler: function handler(req, h) {
    return h.response({
      statusCode: 2090,
      message: 'hello word'
    }).code(200);
  }
}];
var _default = TransitionRouter;
exports["default"] = _default;