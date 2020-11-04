---
order: 2
title:
  en-US: size
  zh-CN: 尺寸
---

## zh-CN

大尺寸用于列表内容较少时使用，默认使用中尺寸。小尺寸列表仅用于对话框内

## en-US

```jsx
import { Table } from 'ucomponent';
import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '应用名称',
    dataIndex: 'name',
  },
  {
    title: '状态',
    dataIndex: 'state',
  },
  {
    title: '创建时间',
    dataIndex: 'number',
    sorter: (a, b) => a.number - b.number,
  },
  {
    title: '操作',
    render: () => (
      <Space size="middle">
        <div>操作1</div>
        <a className="ant-dropdown-link">
          更多
          <DownOutlined style={{ width: '18px', height: '18px' }} />
        </a>
      </Space>
    ),
    width: 150,
  },
];

const data = [
  {
    key: '1',
    name: '我是标题',
    state: '已上线',
    number: 11,
  },
  {
    key: '2',
    name: '我是标题',
    state: '已上线',
    number: 12,
  },
  {
    key: '3',
    name: '我是一段很长的标题',
    state: '异常',
    number: 13,
  },
  {
    key: '4',
    name: '很长的标题。',
    state: '未上线',
    number: 14,
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
    return (
      <div>
        大<Table rowSelection={rowSelection} columns={columns} size="default" dataSource={data} />
        <br />
        <br />中
        <Table rowSelection={rowSelection} columns={columns} size="middle" dataSource={data} />
        <br />
        <br />小
        <Table rowSelection={rowSelection} columns={columns} size="small" dataSource={data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
