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

// export { Table as default } from 'antd';
var Table1 = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Table1, _React$Component);

  var _super = (0, _createSuper2["default"])(Table1);

  function Table1() {
    (0, _classCallCheck2["default"])(this, Table1);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Table1, [{
    key: "render",
    value: function render() {
      var columns = [{
        title: '标题一',
        dataIndex: 'one',
        key: 'one'
      }, {
        title: '标题二',
        dataIndex: 'two',
        key: 'two'
      }, {
        title: '标题三',
        dataIndex: 'three',
        key: 'three'
      }, {
        title: '标题四',
        key: 'four',
        dataIndex: 'four'
      }, {
        title: '操作',
        key: 'Five',
        render: function render() {
          return /*#__PURE__*/_react["default"].createElement(_antd.Space, {
            size: "middle"
          }, /*#__PURE__*/_react["default"].createElement("a", null, "\u53D1\u5E03 \u6D4B\u8BD5 \u5220\u9664"));
        }
      }];
      var data = [{
        key: '1',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四']
      }, {
        key: '2',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四']
      }, {
        key: '3',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四']
      }];
      var type = this.props.type;
      var cls = 'Table';
      var btnCls = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(cls, "-one"), type === 'zebra'), cls);

      if (this.props.type === 'zebra') {
        var neirong = function neirong(record, index) {
          var className = 'light-row';
          if (index % 2 === 1) className = 'dark-row';
          return className;
          return record;
        };

        return /*#__PURE__*/_react["default"].createElement(_antd.Table, (0, _extends2["default"])({
          dataSource: data,
          columns: columns
        }, this.props, {
          rowClassName: neirong,
          className: btnCls
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_antd.Table, (0, _extends2["default"])({
        dataSource: data,
        columns: columns
      }, this.props));
    }
  }]);
  return Table1;
}(_react["default"].Component);

var _default = Table1;
exports["default"] = _default;