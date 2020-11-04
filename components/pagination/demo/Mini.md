---
order: 2
title:
  zh-CN: 迷你样式
---

## zh-CN

迷你版本。

## en-US

```jsx
import { Pagination } from 'ucomponent';

ReactDOM.render(
  <div>
    <Pagination size="small" total={50} />
    <br />
    <Pagination type="bgcolor" size="small" total={50} />
    <br />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <br />
    <Pagination type="bgcolor" size="small" total={50} showSizeChanger showQuickJumper />
  </div>,
  mountNode,
);
```
