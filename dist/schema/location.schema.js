"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _location = _interopRequireDefault(require("../models/location.model"));

var LocationSchema = new _typeorm.EntitySchema({
  name: "Location",
  target: _location["default"],
  tableName: "location",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
      nullable: false
    },
    name: {
      type: "varchar",
      nullable: false
    },
    address: {
      type: "varchar",
      nullable: false
    }
  },
  relations: {
    transition: {
      target: "Transition",
      type: "one-to-many",
      inverseSide: "location",
      joinColumn: true,
      cascade: true,
      eager: false
    },
    "package": {
      target: "Package",
      type: "one-to-many",
      inverseSide: "location",
      joinColumn: true,
      cascade: true,
      eager: false
    }
  }
});
var _default = LocationSchema;
exports["default"] = _default;