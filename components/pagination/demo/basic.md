---
order: 0
title:
  zh-CN: 页码基础样式
---

## zh-CN

当数据过多时，使用分页分解数据

## en-US

```jsx
import { Pagination } from 'ucomponent';

ReactDOM.render(
  <div>
    <Pagination defaultCurrent={1} total={50} />
    <br />
    <Pagination type="bgcolor" defaultCurrent={1} total={50} />
  </div>,
  mountNode,
);
```
