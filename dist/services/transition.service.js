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

var _transition = _interopRequireDefault(require("../models/transition.model"));

var _index = require("./index");

var locationService = new _index.LocationService();
var packageService = new _index.PackageService();

var TransitionService =
/*#__PURE__*/
function () {
  function TransitionService() {
    (0, _classCallCheck2["default"])(this, TransitionService);
  }

  (0, _createClass2["default"])(TransitionService, [{
    key: "transitionRepository",
    value: function transitionRepository() {
      return (0, _typeorm.getRepository)(_transition["default"]);
    }
  }, {
    key: "createTransition",
    value: function () {
      var _createTransition = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(transition) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return packageService.findPackageById(transition.packageItem);

              case 2:
                transition.packageItem = _context.sent;
                _context.next = 5;
                return locationService.findLocationById(transition.location);

              case 5:
                transition.location = _context.sent;
                _context.next = 8;
                return this.transitionRepository().save(transition);

              case 8:
                return _context.abrupt("return", _context.sent);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createTransition(_x) {
        return _createTransition.apply(this, arguments);
      }

      return createTransition;
    }()
  }, {
    key: "findTransitionById",
    value: function () {
      var _findTransitionById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var transition;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.transitionRepository().findOne(id);

              case 2:
                transition = _context2.sent;

                if (transition) {
                  _context2.next = 5;
                  break;
                }

                throw {
                  message: "data transition is not found",
                  status: 404
                };

              case 5:
                return _context2.abrupt("return", transition);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findTransitionById(_x2) {
        return _findTransitionById.apply(this, arguments);
      }

      return findTransitionById;
    }()
  }, {
    key: "updateTransition",
    value: function () {
      var _updateTransition = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(transition) {
        var transitionToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.findTransitionById(transition.id);

              case 2:
                transitionToUpdate = _context3.sent;
                this.transitionRepository().merge(transitionToUpdate, transition);
                _context3.next = 6;
                return this.transitionRepository().save(transitionToUpdate);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateTransition(_x3) {
        return _updateTransition.apply(this, arguments);
      }

      return updateTransition;
    }()
  }, {
    key: "findAllTransition",
    value: function () {
      var _findAllTransition = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.transitionRepository().find();

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findAllTransition() {
        return _findAllTransition.apply(this, arguments);
      }

      return findAllTransition;
    }()
  }, {
    key: "deleteTransition",
    value: function () {
      var _deleteTransition = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var transition;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.findTransitionById(id);

              case 2:
                transition = _context5.sent;
                _context5.next = 5;
                return this.transitionRepository()["delete"](transition);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteTransition(_x4) {
        return _deleteTransition.apply(this, arguments);
      }

      return deleteTransition;
    }()
  }]);
  return TransitionService;
}();

var _default = TransitionService;
exports["default"] = _default;