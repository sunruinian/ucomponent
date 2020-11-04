"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

// export { Checkbox as default } from 'antd';
var Checkbox1 = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Checkbox1, _React$Component);

  var _super = (0, _createSuper2["default"])(Checkbox1);

  function Checkbox1() {
    (0, _classCallCheck2["default"])(this, Checkbox1);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Checkbox1, [{
    key: "render",
    value: function render() {
      var _classNames;

      var mold = this.props.mold;
      var cls = 'Checkbox';
      var btnCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two"), mold === 'one-middle'), (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two ").concat(cls, "-large"), mold === 'one-large'), (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two ").concat(cls, "-small"), mold === 'one-small'), (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two ").concat(cls, "-three"), mold === 'two-middle'), (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two ").concat(cls, "-three ").concat(cls, "-large"), mold === 'two-large'), (0, _defineProperty2["default"])(_classNames, "".concat(cls, "-two ").concat(cls, "-three ").concat(cls, "-small"), mold === 'two-small'), _classNames), cls);
      return /*#__PURE__*/_react["default"].createElement(_antd.Checkbox, (0, _extends2["default"])({}, this.props, {
        className: btnCls
      }));
    }
  }]);
  return Checkbox1;
}(_react["default"].Component);

var _default = Checkbox1;
exports["default"] = _default;