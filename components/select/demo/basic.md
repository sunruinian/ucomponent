---
order: 0
title:
  zh-CN: 基本使用
---

## zh-CN

基本使用。

## en-US

```jsx
import { Select } from 'ucomponent';

const { Option } = Select;

ReactDOM.render(
  <>
    <Select size="large" defaultValue="请选择" style={{ width: 200 }}>
      <Option value="jack">一个菜单</Option>
      <Option value="lucy">一个菜单</Option>
      <Option value="disabled" disabled>
        一个菜单
      </Option>
      <Option value="Yiminghe">一个菜单</Option>
    </Select>

    <Select defaultValue="请选择" style={{ width: 200 }}>
      <Option value="jack">一个菜单</Option>
      <Option value="lucy">一个菜单</Option>
      <Option value="disabled" disabled>
        一个菜单
      </Option>
      <Option value="Yiminghe">一个菜单</Option>
    </Select>

    <Select size="small" defaultValue="请选择" style={{ width: 200 }}>
      <Option value="jack">一个菜单</Option>
      <Option value="lucy">一个菜单</Option>
      <Option value="disabled" disabled>
        一个菜单
      </Option>
      <Option value="Yiminghe">一个菜单</Option>
    </Select>
    <br />
    <br />
    <Select size="large" defaultValue="请选择" style={{ width: 200 }} disabled>
      <Option value="lucy">一个菜单</Option>
    </Select>

    <Select defaultValue="请选择" style={{ width: 200 }} disabled>
      <Option value="lucy">一个菜单</Option>
    </Select>

    <Select size="small" defaultValue="请选择" style={{ width: 200 }} disabled>
      <Option value="lucy">一个菜单</Option>
    </Select>
    <br />
    <br />
    <Select size="large" defaultValue="请选择" style={{ width: 200 }} allowClear>
      <Option value="lucy">一个菜单</Option>
    </Select>

    <Select defaultValue="请选择" style={{ width: 200 }} allowClear>
      <Option value="lucy">一个菜单</Option>
    </Select>

    <Select size="small" defaultValue="请选择" style={{ width: 200 }} allowClear>
      <Option value="lucy">一个菜单</Option>
    </Select>
  </>,
  mountNode,
);
```
