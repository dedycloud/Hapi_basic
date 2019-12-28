"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _location = _interopRequireDefault(require("../models/location.model"));

var Bcrypt = require('bcryptjs');

var LocationService =
/*#__PURE__*/
function () {
  function LocationService() {
    (0, _classCallCheck2["default"])(this, LocationService);
  }

  (0, _createClass2["default"])(LocationService, [{
    key: "locationRepository",
    value: function locationRepository() {
      return (0, _typeorm.getRepository)(_location["default"]);
    }
  }, {
    key: "createLocation",
    value: function () {
      var _createLocation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(location) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.locationRepository().save(location);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createLocation(_x) {
        return _createLocation.apply(this, arguments);
      }

      return createLocation;
    }()
  }, {
    key: "updateLocation",
    value: function () {
      var _updateLocation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(location) {
        var locationToUpdate;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(location);
                _context2.next = 3;
                return this.findLocationById(location.id);

              case 3:
                locationToUpdate = _context2.sent;
                this.locationRepository().merge(locationToUpdate, location);
                _context2.next = 7;
                return this.locationRepository().save(locationToUpdate);

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateLocation(_x2) {
        return _updateLocation.apply(this, arguments);
      }

      return updateLocation;
    }()
  }, {
    key: "findLocationById",
    value: function () {
      var _findLocationById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id) {
        var location;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.locationRepository().findOne(id);

              case 2:
                location = _context3.sent;

                if (location) {
                  _context3.next = 5;
                  break;
                }

                throw _boom["default"].notFound('customer not found');

              case 5:
                return _context3.abrupt("return", location);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findLocationById(_x3) {
        return _findLocationById.apply(this, arguments);
      }

      return findLocationById;
    }()
  }, {
    key: "findAllLocation",
    value: function () {
      var _findAllLocation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.locationRepository().find();

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findAllLocation() {
        return _findAllLocation.apply(this, arguments);
      }

      return findAllLocation;
    }()
  }, {
    key: "deleteLocation",
    value: function () {
      var _deleteLocation = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var location;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.findLocationById(id);

              case 2:
                location = _context5.sent;
                _context5.next = 5;
                return this.locationRepository()["delete"](location);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteLocation(_x4) {
        return _deleteLocation.apply(this, arguments);
      }

      return deleteLocation;
    }() // async beforeCreate(password){
    // const salt = bcrypt.genSaltSync();
    // return await bcrypt.hashSync(password,salt)
    // }
    //
    // async validPassword(password,checkPassword){
    //     return await bcrypt.compareSync(password,checkPassword)
    // }
    // async seacrh(payload){
    //     if(payload.email){
    //         return this.findByemail(payload.email);
    //     }else if(payload.fullname) {
    //         return this.locationRepository().findOne({fullname:payload.fullname});
    //     }
    // }
    // async updatePassword(data){
    //     const id =`${data.id}`;
    //     let datanya = this.locationRepository().findOne(id) ;
    //     if(datanya){
    //         const {password} = data;
    //         data.password = await this.beforeCreate(password);
    //         return this.locationRepository().save(data);
    //     }
    // }
    // async createPassword(data){
    //     const {password} = data;
    //     data.password = await this.beforeCreate(password);
    //     return this.locationRepository().save(data);
    // }

  }]);
  return LocationService;
}();

var _default = LocationService;
exports["default"] = _default;