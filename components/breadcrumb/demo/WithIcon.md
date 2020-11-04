---
order: 0
title:
  zh-CN: 带图标的样式
---

## zh-CN

```jsx
import { Breadcrumb } from 'ucomponent';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```
