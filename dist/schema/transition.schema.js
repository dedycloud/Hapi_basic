"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _transition = _interopRequireDefault(require("../models/transition.model"));

var TransitionSchema = new _typeorm.EntitySchema({
  name: "Transition",
  target: _transition["default"],
  tableName: "transition",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid"
    },
    date: {
      type: 'date',
      nullable: false,
      "default": function _default() {
        return 'CURRENT_TIMESTAMP';
      }
    }
  },
  relations: {
    location: {
      target: "Location",
      type: "many-to-one",
      joinColumn: true,
      eager: true
    },
    packageItem: {
      target: "Package",
      type: "many-to-one",
      joinColumn: true,
      eager: false
    }
  }
});
var _default2 = TransitionSchema;
exports["default"] = _default2;