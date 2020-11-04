---
order: 1
title:
  en-US: border, title and footer
  zh-CN: 带边框
---

## zh-CN

添加表格边框线。

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

ReactDOM.render(<Table columns={columns} dataSource={data} bordered />, mountNode);
```
