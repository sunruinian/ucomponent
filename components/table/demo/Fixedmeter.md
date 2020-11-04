---
order: 5
title:
  zh-CN: 固定表头
---

## zh-CN

纵向内容过多时，可选择固定表头

## en-US

```jsx
import { Table } from 'ucomponent';
import { Space } from 'antd';

const columns = [
  {
    title: '标题一',
    dataIndex: 'one',
    key: 'one',
    width: 100,
  },
  {
    title: '标题二',
    dataIndex: 'two',
    key: 'two',
    width: 100,
  },
  {
    title: '标题三',
    dataIndex: 'three',
    key: 'three',
    width: 100,
  },
  {
    title: '标题四',
    key: 'four',
    dataIndex: 'four',
    width: 100,
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

ReactDOM.render(<Table columns={columns} bordered dataSource={data} />, mountNode);
```
