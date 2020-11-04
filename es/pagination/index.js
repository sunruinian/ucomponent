import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
import React from 'react';
import { Pagination } from 'antd';
import classNames from 'classnames';

var Pagination1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination1, _React$Component);

  var _super = _createSuper(Pagination1);

  function Pagination1() {
    _classCallCheck(this, Pagination1);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination1, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      var cls = 'Pagination';
      var btnCls = classNames(_defineProperty({}, "".concat(cls, "-bgcolor ").concat(cls, "-bgcolor1  ").concat(cls, "-bgcolor2 ").concat(cls, "-bgcolor3"), type === 'bgcolor'), cls);
      return /*#__PURE__*/React.createElement(Pagination, _extends({}, this.props, {
        className: btnCls
      }));
    }
  }]);

  return Pagination1;
}(React.Component);

export default Pagination1;