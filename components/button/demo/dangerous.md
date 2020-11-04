---
order: 7
title: 危险按钮
---

## zh-CN

在 4.0 之后，危险成为一种按钮属性而不是按钮类型。

## en-US

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <>
    <Button type="primary" danger>
      初级
    </Button>
    <Button danger>默认</Button>
    <Button type="dashed" danger>
      虚线
    </Button>
    <Button type="text" danger>
      文字
    </Button>
    <Button type="link" danger>
      链接
    </Button>
  </>,
  mountNode,
);
```
