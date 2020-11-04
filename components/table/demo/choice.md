---
order: 3
title:
  zh-CN: 可选择
---

## zh-CN

可选择

## en-US

```jsx
import { Table } from 'ucomponent';
import { Space } from 'antd';

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
    render: (text, record) => (
      <Space size="middle">
        <a>发布 测试 删除</a>
        <a>{record.one}</a>
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

class App extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}

ReactDOM.render(<App />, mountNode);
```
