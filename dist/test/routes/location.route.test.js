"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../../index"));

var _location = _interopRequireDefault(require("../../services/location.service"));

var locationService = new _location["default"]();
describe('Location route', function () {
  var app;
  beforeEach(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _index["default"])();

          case 2:
            app = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should /GET ',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _supertest["default"])(app).get('/');

          case 2:
            res = _context2.sent;
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual({
              statusCode: 2090,
              message: 'hello word'
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  afterEach(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (app) {
              app.close();
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
describe('Login routes ', function () {
  var app;
  it('should login GET /Login',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  afterEach(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (app) {
              app.close();
            }

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
});