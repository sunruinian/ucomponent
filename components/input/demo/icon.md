---
order: 4
title:
  zh-CN: 带图标的输入框
---

## zh-CN

带图标的输入框

## en-US

```jsx
import { Input } from 'ucomponent';
import { UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Input
      size="large"
      placeholder="请输入你的名字"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={<UserOutlined className="site-form-item-icon" />}
    />
    <br />
    <br />
    <Input
      placeholder="请输入你的名字"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={<UserOutlined className="site-form-item-icon" />}
    />
    <br />
    <br />
    <Input
      size="small"
      placeholder="请输入你的名字"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={<UserOutlined className="site-form-item-icon" />}
    />
  </>,
  mountNode,
);
```
