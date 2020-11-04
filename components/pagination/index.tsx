import React from 'react';
import { Pagination } from 'antd';
import classNames from 'classnames';

class Pagination1 extends React.Component<any, any> {
  render() {
    const { type } = this.props;
    const cls = 'Pagination';
    const btnCls = classNames(
      {
        [`${cls}-bgcolor ${cls}-bgcolor1  ${cls}-bgcolor2 ${cls}-bgcolor3`]: type === 'bgcolor',
      },
      cls,
    );
    return <Pagination {...this.props} className={btnCls} />;
  }
}
export default Pagination1;
