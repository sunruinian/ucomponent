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

var Pagination1 = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Pagination1, _React$Component);

  var _super = (0, _createSuper2["default"])(Pagination1);

  function Pagination1() {
    (0, _classCallCheck2["default"])(this, Pagination1);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Pagination1, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      var cls = 'Pagination';
      var btnCls = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(cls, "-bgcolor ").concat(cls, "-bgcolor1  ").concat(cls, "-bgcolor2 ").concat(cls, "-bgcolor3"), type === 'bgcolor'), cls);
      return /*#__PURE__*/_react["default"].createElement(_antd.Pagination, (0, _extends2["default"])({}, this.props, {
        className: btnCls
      }));
    }
  }]);
  return Pagination1;
}(_react["default"].Component);

var _default = Pagination1;
exports["default"] = _default;