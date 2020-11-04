import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
// export { Table as default } from 'antd';
import React from 'react';
import { Table } from 'antd';
import { Space } from 'antd';
import classNames from 'classnames';

var Table1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Table1, _React$Component);

  var _super = _createSuper(Table1);

  function Table1() {
    _classCallCheck(this, Table1);

    return _super.apply(this, arguments);
  }

  _createClass(Table1, [{
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
          return /*#__PURE__*/React.createElement(Space, {
            size: "middle"
          }, /*#__PURE__*/React.createElement("a", null, "\u53D1\u5E03 \u6D4B\u8BD5 \u5220\u9664"));
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
      var btnCls = classNames(_defineProperty({}, "".concat(cls, "-one"), type === 'zebra'), cls);

      if (this.props.type === 'zebra') {
        var neirong = function neirong(record, index) {
          var className = 'light-row';
          if (index % 2 === 1) className = 'dark-row';
          return className;
          return record;
        };

        return /*#__PURE__*/React.createElement(Table, _extends({
          dataSource: data,
          columns: columns
        }, this.props, {
          rowClassName: neirong,
          className: btnCls
        }));
      }

      return /*#__PURE__*/React.createElement(Table, _extends({
        dataSource: data,
        columns: columns
      }, this.props));
    }
  }]);

  return Table1;
}(React.Component);

export default Table1;