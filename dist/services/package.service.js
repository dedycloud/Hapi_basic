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

var _package = _interopRequireDefault(require("../models/package.model"));

var PackageService =
/*#__PURE__*/
function () {
  function PackageService() {
    (0, _classCallCheck2["default"])(this, PackageService);
  }

  (0, _createClass2["default"])(PackageService, [{
    key: "packageRepository",
    value: function packageRepository() {
      return (0, _typeorm.getRepository)(_package["default"]);
    }
  }, {
    key: "createPackage",
    value: function () {
      var _createPackage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(packages) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.packageRepository().save(packages);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createPackage(_x) {
        return _createPackage.apply(this, arguments);
      }

      return createPackage;
    }()
  }, {
    key: "updatePackage",
    value: function () {
      var _updatePackage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(packages) {
        var packageToUpdate;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.findPackageById(packages.id);

              case 2:
                packageToUpdate = _context2.sent;
                this.packageRepository().merge(packageToUpdate, packages);
                _context2.next = 6;
                return this.packageRepository().save(packageToUpdate);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updatePackage(_x2) {
        return _updatePackage.apply(this, arguments);
      }

      return updatePackage;
    }()
  }, {
    key: "findAllPackage",
    value: function () {
      var _findAllPackage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.packageRepository().find();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findAllPackage() {
        return _findAllPackage.apply(this, arguments);
      }

      return findAllPackage;
    }()
  }, {
    key: "findPackageById",
    value: function () {
      var _findPackageById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var packages;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.packageRepository().findOne(id);

              case 2:
                packages = _context4.sent;

                if (packages) {
                  _context4.next = 5;
                  break;
                }

                throw {
                  message: "data package is not found",
                  status: 404
                };

              case 5:
                return _context4.abrupt("return", packages);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findPackageById(_x3) {
        return _findPackageById.apply(this, arguments);
      }

      return findPackageById;
    }()
  }, {
    key: "deletePackage",
    value: function () {
      var _deletePackage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var packages;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.findPackageById(id);

              case 2:
                packages = _context5.sent;
                _context5.next = 5;
                return this.packageRepository()["delete"](packages);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deletePackage(_x4) {
        return _deletePackage.apply(this, arguments);
      }

      return deletePackage;
    }()
  }]);
  return PackageService;
}();

var _default = PackageService;
exports["default"] = _default;