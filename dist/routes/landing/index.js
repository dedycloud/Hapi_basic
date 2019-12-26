"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var landing = {
  method: 'GET',
  path: '/',
  handler: function handler(req, h) {
    return h.response({
      statusCode: 2090,
      message: 'hello word'
    }).code(200);
  }
};
var _default = landing;
exports["default"] = _default;