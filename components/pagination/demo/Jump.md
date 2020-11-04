---
order: 1
title:
  zh-CN: 跳转分页效果
---

## zh-CN

快速跳转到某一页。

## en-US

```jsx
import { Pagination } from 'ucomponent';

ReactDOM.render(
  <div>
    <Pagination defaultCurrent={6} total={500} />
    <br />
    <Pagination type="bgcolor" defaultCurrent={6} total={500} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} />
    <br />
    <Pagination type="bgcolor" showQuickJumper defaultCurrent={2} total={500} />
  </div>,
  mountNode,
);
```
