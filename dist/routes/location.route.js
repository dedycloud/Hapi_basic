"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _services = require("../services");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var locationService = new _services.LocationService();
var LocationRouter = [{
  method: 'POST',
  path: '/location',
  config: {
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, h) {
        var location;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                location = req.payload;
                _context.next = 3;
                return locationService.createLocation(location);

              case 3:
                location = _context.sent;

                if (location) {
                  _context.next = 8;
                  break;
                }

                throw _boom["default"].notFound('customer not found');

              case 8:
                return _context.abrupt("return", location);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handler(_x, _x2) {
        return _handler.apply(this, arguments);
      }

      return handler;
    }(),
    validate: {
      payload: _joi["default"].object({
        name: _joi["default"].string().min(1).max(140).required(),
        address: _joi["default"].string().max(14).required() // date: Joi.date().required()

      })
    }
  }
}, {
  method: 'GET',
  path: '/location',
  config: {
    handler: function () {
      var _handler2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, h) {
        var location;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return locationService.findAllLocation();

              case 2:
                location = _context2.sent;

                if (location) {
                  _context2.next = 7;
                  break;
                }

                throw _boom["default"].notFound('customer not found');

              case 7:
                return _context2.abrupt("return", location);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function handler(_x3, _x4) {
        return _handler2.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'PUT',
  path: '/locations',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, h) {
        var location;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                location = req.payload; //   console.log(location.id)

                _context3.next = 3;
                return locationService.updateLocation(location);

              case 3:
                location = _context3.sent;
                return _context3.abrupt("return", location);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function handler(_x5, _x6) {
        return _handler3.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'GET',
  path: '/location/{id}',
  config: {
    handler: function () {
      var _handler4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, h) {
        var params, locationById;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = req.params;
                _context4.next = 3;
                return locationService.findLocationById(params.id);

              case 3:
                locationById = _context4.sent;
                return _context4.abrupt("return", locationById);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function handler(_x7, _x8) {
        return _handler4.apply(this, arguments);
      }

      return handler;
    }()
  }
}];
var _default = LocationRouter;
exports["default"] = _default;