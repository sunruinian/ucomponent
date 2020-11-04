---
order: 4
title:
  zh-CN: 可排序
---

## zh-CN

可排序

## en-US

```jsx
import { Table } from 'ucomponent';
import { Space } from 'antd';

const columns = [
  {
    title: '标题一',
    dataIndex: 'one',
    key: 'one',
    sorter: {},
  },
  {
    title: '标题二',
    dataIndex: 'two',
    key: 'two',
    sorter: {},
  },
  {
    title: '标题三',
    dataIndex: 'three',
    key: 'three',
    sorter: {},
  },
  {
    title: '标题四',
    key: 'four',
    dataIndex: 'four',
    sorter: {},
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
    one: '我是内容',
    two: '谁是内容',
    three: '内容',
    four: '你是内容吗？',
  },
  {
    key: '2',
    one: '你是内容',
    two: '内容',
    three: '谁是内容',
    four: '我不是内容',
  },
  {
    key: '3',
    one: '她是内容',
    two: '内容',
    three: '我是内容',
    four: '你是内容',
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
