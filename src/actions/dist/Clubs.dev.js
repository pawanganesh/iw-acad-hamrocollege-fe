"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteClub = exports.getClubs = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getClubs = function getClubs() {
  return function (dispatch) {
    _axios["default"].get("http://127.0.0.1:8000/api/Club/Club/").then(function (res) {
      dispatch({
        type: _types.GET_CLUBS,
        payload: res.data
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.getClubs = getClubs;

var deleteClub = function deleteClub(id) {
  return function (dispatch) {
    _axios["default"]["delete"]("http://127.0.0.1:8000/api/Club/Club/".concat(id, "/")).then(function (res) {
      dispatch({
        type: _types.DELETE_CLUBS,
        payload: id
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
};

exports.deleteClub = deleteClub;