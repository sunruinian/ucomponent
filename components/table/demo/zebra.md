---
order: 2
title:
  zh-CN: 带斑马纹表格
---

## zh-CN

使用带斑马纹的表格，可以更容易区分出不同行的数据

斑马线表格

- 模版中加入”type“ ，接收属性为“zebra”。设置为斑马类型，不设置则无。

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
  {
    key: '4',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '5',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '6',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '7',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '8',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '9',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '10',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '11',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
  {
    key: '12',
    one: '标题一',
    two: '标题二',
    three: '标题三',
    four: ['标题四'],
  },
];

ReactDOM.render(<Table dataSource={data} columns={columns} type="zebra" />, mountNode);
```
