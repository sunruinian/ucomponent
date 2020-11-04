---
order: 6
title:
  zh-CN: 密码框
---

## zh-CN

密码框

## en-US

```jsx
import { Input } from 'ucomponent';
import { Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

ReactDOM.render(
  <Space direction="vertical">
    <Input.Password placeholder="密码框" />
    <Input.Password
      placeholder="密码框"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
  </Space>,
  mountNode,
);
```
