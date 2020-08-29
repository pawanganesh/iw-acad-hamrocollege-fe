"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteClassroom = exports.getClassrooms = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getClassrooms = function getClassrooms() {
  return function (dispatch) {
    _axios["default"].get("http://127.0.0.1:8000/api/classroom/classroom/").then(function (res) {
      dispatch({
        type: _types.GET_CLASSROOMS,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getClassrooms = getClassrooms;

var deleteClassroom = function deleteClassroom(id) {
  return function (dispatch) {
    _axios["default"]["delete"]("http://127.0.0.1:8000/api/classroom/classroom/".concat(id, "/")).then(function (res) {
      dispatch({
        type: _types.DELETE_CLASSROOMS,
        payload: id
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.deleteClassroom = deleteClassroom;