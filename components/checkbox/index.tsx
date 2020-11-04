// export { Checkbox as default } from 'antd';
import React from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames';

class Checkbox1 extends React.Component<any, any> {
  render() {
    const { mold } = this.props;
    const cls = 'Checkbox';
    const btnCls = classNames(
      {
        [`${cls}-two`]: mold === 'one-middle',
        [`${cls}-two ${cls}-large`]: mold === 'one-large',
        [`${cls}-two ${cls}-small`]: mold === 'one-small',
        [`${cls}-two ${cls}-three`]: mold === 'two-middle',
        [`${cls}-two ${cls}-three ${cls}-large`]: mold === 'two-large',
        [`${cls}-two ${cls}-three ${cls}-small`]: mold === 'two-small',
      },
      cls,
    );
    return <Checkbox {...this.props} className={btnCls} />;
  }
}

export default Checkbox1;
