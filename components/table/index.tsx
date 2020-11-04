// export { Table as default } from 'antd';
import React from 'react';
import { Table } from 'antd';
import { Space } from 'antd';
import classNames from 'classnames';

class Table1 extends React.Component<any, any> {
  render() {
    const columns = [
      {
        title: '标题一',
        dataIndex: 'one',
        key: 'one',
      },
      {
        title: '标题二',
        dataIndex: 'two',
        key: 'two',
      },
      {
        title: '标题三',
        dataIndex: 'three',
        key: 'three',
      },
      {
        title: '标题四',
        key: 'four',
        dataIndex: 'four',
      },
      {
        title: '操作',
        key: 'Five',
        render: () => (
          <Space size="middle">
            <a>发布 测试 删除</a>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四'],
      },
      {
        key: '2',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四'],
      },
      {
        key: '3',
        one: '标题一',
        two: '标题二',
        three: '标题三',
        four: ['标题四'],
      },
    ];
    const { type } = this.props;
    const cls = 'Table';
    const btnCls = classNames(
      {
        [`${cls}-one`]: type === 'zebra',
      },
      cls,
    );
    if (this.props.type === 'zebra') {
      const neirong = function (record: any, index: number) {
        let className = 'light-row';
        if (index % 2 === 1) className = 'dark-row';
        return className;
        return record;
      };
      return (
        <Table
          dataSource={data}
          columns={columns}
          {...this.props}
          rowClassName={neirong}
          className={btnCls}
        />
      );
    }
    return <Table dataSource={data} columns={columns} {...this.props} />;
  }
}
export default Table1;
