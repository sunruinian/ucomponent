---
order: 1
title:
  zh-CN: 不带图标的样式
---

## zh-CN

```jsx
import { Breadcrumb } from 'ucomponent';

ReactDOM.render(
  <Breadcrumb>
    <Breadcrumb.Item href="">home</Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <span>List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  mountNode,
);
```
