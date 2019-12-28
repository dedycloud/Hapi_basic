"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configure;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = require("path");

function configure() {
  if (process.env.NODE_ENV === 'test') {
    console.log("DB TEST");

    _dotenv["default"].config({
      path: (0, _path.resolve)("test.env")
    });
  } else {
    console.log("DB run");

    _dotenv["default"].config();
  }

  if (!process.env.APP_NAME) {
    console.error('Environment file (.env) not found in folder');
    process.exit(1);
  }

  process.env.BASE_PATH = (0, _path.dirname)((0, _path.resolve)('index.js'));
}