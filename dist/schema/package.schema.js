"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _package = _interopRequireDefault(require("../models/package.model"));

var PackageSchema = new _typeorm.EntitySchema({
  name: "Package",
  target: _package["default"],
  tableName: "package",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid"
    },
    regNumber: {
      type: "int",
      unique: true,
      nullable: false
    },
    // originLocation:{
    //   type:"varchar",
    //   nullable: false
    // },
    // destinationLocation:{
    //     type:"varchar",
    //     nullable:false
    // },
    weight: {
      type: "int",
      nullable: false
    },
    cost: {
      type: "integer",
      nullable: false
    }
  },
  relations: {
    originLocation: {
      target: "Location",
      type: "many-to-one",
      joinColumn: true,
      eager: true
    },
    destinationLocation: {
      target: "Location",
      type: "many-to-one",
      joinColumn: true,
      eager: true
    },
    transition: {
      target: "Transition",
      type: "one-to-many",
      inverseSide: "packageItem",
      joinColumn: true,
      cascade: true,
      eager: true
    }
  }
});
var _default = PackageSchema;
exports["default"] = _default;