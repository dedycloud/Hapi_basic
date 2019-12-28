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

var _login2 = _interopRequireDefault(require("../models/login.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var LoginService =
/*#__PURE__*/
function () {
  function LoginService() {
    (0, _classCallCheck2["default"])(this, LoginService);
  }

  (0, _createClass2["default"])(LoginService, [{
    key: "loginRepository",
    value: function loginRepository() {
      return (0, _typeorm.getRepository)(_login2["default"]);
    }
  }, {
    key: "beforeCreate",
    value: function () {
      var _beforeCreate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(password) {
        var salt;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                salt = _bcryptjs["default"].genSaltSync();
                return _context.abrupt("return", _bcryptjs["default"].hashSync(password, salt));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function beforeCreate(_x) {
        return _beforeCreate.apply(this, arguments);
      }

      return beforeCreate;
    }()
  }, {
    key: "validPassword",
    value: function () {
      var _validPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(password, checkPassword) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _bcryptjs["default"].compareSync(password, checkPassword));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function validPassword(_x2, _x3) {
        return _validPassword.apply(this, arguments);
      }

      return validPassword;
    }() // async seacrh(payload){
    //     if(payload.email){
    //         return this.findByemail(payload.email);
    //     }else if(payload.fullname) {
    //         return this.locationRepository().findOne({fullname:payload.fullname});
    //     }
    // }

  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(data) {
        var id, datanya, password;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = "".concat(data.id);
                datanya = this.loginRepository().findOne(id);

                if (!datanya) {
                  _context3.next = 8;
                  break;
                }

                password = data.password;
                _context3.next = 6;
                return this.beforeCreate(password);

              case 6:
                data.password = _context3.sent;
                return _context3.abrupt("return", this.loginRepository().save(data));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updatePassword(_x4) {
        return _updatePassword.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: "createPassword",
    value: function () {
      var _createPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(data) {
        var password;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                password = data.password;
                _context4.next = 3;
                return this.beforeCreate(password);

              case 3:
                data.password = _context4.sent;
                return _context4.abrupt("return", this.loginRepository().save(data));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createPassword(_x5) {
        return _createPassword.apply(this, arguments);
      }

      return createPassword;
    }()
  }, {
    key: "findByUsername",
    value: function () {
      var _findByUsername = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(username) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loginRepository().findOne({
                  username: username
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function findByUsername(_x6) {
        return _findByUsername.apply(this, arguments);
      }

      return findByUsername;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(data) {
        var username, password, user;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                username = data.username, password = data.password;
                _context6.next = 3;
                return this.findByUsername(username);

              case 3:
                user = _context6.sent;
                _context6.t0 = user;

                if (!_context6.t0) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 8;
                return this.validPassword(password, user.password);

              case 8:
                _context6.t0 = _context6.sent;

              case 9:
                if (!_context6.t0) {
                  _context6.next = 13;
                  break;
                }

                return _context6.abrupt("return", user);

              case 13:
                throw _boom["default"].unauthorized('Invalid Username or Password');

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function login(_x7) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return LoginService;
}();

exports["default"] = LoginService;