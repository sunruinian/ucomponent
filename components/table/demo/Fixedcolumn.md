---
order: 6
title:
  zh-CN: 固定列
---

## zh-CN

横向内容过多时，可选择固定列

## en-US

```jsx
import { Table } from 'ucomponent';
import { Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '名称',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '年龄',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  { title: '标题 1', dataIndex: 'address', key: '1' },
  { title: '标题 2', dataIndex: 'address', key: '2' },
  { title: '标题 3', dataIndex: 'address', key: '3' },
  { title: '标题 4', dataIndex: 'address', key: '4' },
  { title: '标题 5', dataIndex: 'address', key: '5' },
  { title: '标题 6', dataIndex: 'address', key: '6' },
  { title: '标题 7', dataIndex: 'address', key: '7' },
  { title: '标题 8', dataIndex: 'address', key: '8' },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => (
      <Space size="middle">
        <a>操作1</a>
        <a>
          更多
          <RightOutlined style={{ width: '18px', height: '18px' }} />
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

ReactDOM.render(<Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />, mountNode);
```
