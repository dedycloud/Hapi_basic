"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _login = _interopRequireDefault(require("../services/login.service"));

var loginService = new _login["default"]();
var LoginRoute = [{
  method: 'POST',
  path: '/login',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = req.payload;
              _context.next = 3;
              return loginService.createPassword(data);

            case 3:
              return _context.abrupt("return", data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function handler(_x) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'POST',
  path: '/logins',
  handler: function handler(req) {
    return loginService.login(req.payload);
  }
}, {
  method: 'GET',
  path: '/login/{id}',
  config: {
    auth: simple,
    handler: function () {
      var _handler2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, h) {
        var params, login;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = req.params;
                _context2.next = 3;
                return loginService.findByUsername(params.id);

              case 3:
                login = _context2.sent;
                return _context2.abrupt("return", login);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function handler(_x2, _x3) {
        return _handler2.apply(this, arguments);
      }

      return handler;
    }()
  }
}];
var _default = LoginRoute;
exports["default"] = _default;