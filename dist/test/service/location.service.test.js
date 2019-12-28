"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _location = _interopRequireDefault(require("../../services/location.service"));

var _index = _interopRequireDefault(require("../../index"));

var locationService = new _location["default"]();
var dataLocation = {
  name: "dedyss",
  address: "jl.abdurahman"
};
var dataLocations = [{
  name: "dedy",
  address: "jl.abdurahman"
}, {
  name: "dedys",
  address: "jl.abdurahman"
}];
describe('find location', function () {
  var server;
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
            server = _context.sent;
            _context.next = 5;
            return locationService.locationRepository().clear();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should return location',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var _ref3, id, name, location;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return locationService.locationRepository().save(dataLocation);

          case 2:
            _ref3 = _context2.sent;
            id = _ref3.id;
            name = _ref3.name;
            _context2.next = 7;
            return locationService.findLocationById(id);

          case 7:
            location = _context2.sent;
            expect(location).toMatchObject({
              id: id,
              name: name
            });

          case 9:
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
            if (server) {
              server.close();
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
describe('create location ', function () {
  var server;
  beforeEach(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _index["default"])();

          case 2:
            server = _context4.sent;
            _context4.next = 5;
            return locationService.locationRepository().query('SET FOREIGN_KEY_CHECKS=0');

          case 5:
            _context4.next = 7;
            return locationService.locationRepository().clear();

          case 7:
            _context4.next = 9;
            return locationService.locationRepository().query('SET FOREIGN_KEY_CHECKS=1');

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should return location save',
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5() {
    var saveLocation, i, location;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            saveLocation = [];
            i = 0;

          case 2:
            if (!(i < dataLocations.length)) {
              _context5.next = 11;
              break;
            }

            _context5.t0 = saveLocation;
            _context5.next = 6;
            return locationService.locationRepository().save(dataLocations[i]);

          case 6:
            _context5.t1 = _context5.sent;

            _context5.t0.push.call(_context5.t0, _context5.t1);

          case 8:
            i++;
            _context5.next = 2;
            break;

          case 11:
            _context5.next = 13;
            return locationService.findAllLocation();

          case 13:
            location = _context5.sent;
            expect(location).toHaveLength(saveLocation.length);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  afterEach(
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6() {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (server) {
              server.close();
            }

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
});