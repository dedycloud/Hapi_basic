"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _connection = _interopRequireDefault(require("./db/connection"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var _routes = _interopRequireDefault(require("./routes"));

var _config = _interopRequireDefault(require("./config"));

process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});

var _default =
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  var connection, server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _config["default"])();
          _context.next = 3;
          return (0, _connection["default"])();

        case 3:
          connection = _context.sent;
          server = _hapi["default"].server({
            port: process.env.APP_PORT,
            host: process.env.APP_HOST
          });
          server.route(_routes["default"]);

          if (!connection.isConnected) {
            _context.next = 12;
            break;
          }

          console.log('DATABASE CONNECTED');
          _context.next = 10;
          return server.start();

        case 10:
          console.log("DB connection name ".concat(connection.name));
          console.log('Server ', process.env.APP_NAME, ' running on ', server.info.uri);

        case 12:
          return _context.abrupt("return", server.listener);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

exports["default"] = _default;