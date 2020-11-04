import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _createSuper from "@babel/runtime/helpers/createSuper";
// export { Checkbox as default } from 'antd';
import React from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames';

var Checkbox1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Checkbox1, _React$Component);

  var _super = _createSuper(Checkbox1);

  function Checkbox1() {
    _classCallCheck(this, Checkbox1);

    return _super.apply(this, arguments);
  }

  _createClass(Checkbox1, [{
    key: "render",
    value: function render() {
      var _classNames;

      var mold = this.props.mold;
      var cls = 'Checkbox';
      var btnCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(cls, "-two"), mold === 'one-middle'), _defineProperty(_classNames, "".concat(cls, "-two ").concat(cls, "-large"), mold === 'one-large'), _defineProperty(_classNames, "".concat(cls, "-two ").concat(cls, "-small"), mold === 'one-small'), _defineProperty(_classNames, "".concat(cls, "-two ").concat(cls, "-three"), mold === 'two-middle'), _defineProperty(_classNames, "".concat(cls, "-two ").concat(cls, "-three ").concat(cls, "-large"), mold === 'two-large'), _defineProperty(_classNames, "".concat(cls, "-two ").concat(cls, "-three ").concat(cls, "-small"), mold === 'two-small'), _classNames), cls);
      return /*#__PURE__*/React.createElement(Checkbox, _extends({}, this.props, {
        className: btnCls
      }));
    }
  }]);

  return Checkbox1;
}(React.Component);

export default Checkbox1;