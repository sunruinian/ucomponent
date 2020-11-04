---
order: 3
title:
  zh-CN: 迷你样式
---

## zh-CN

简单的翻页。

## en-US

```jsx
import { Pagination } from 'ucomponent';

ReactDOM.render(
  <div>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </div>,
  mountNode,
);
```
