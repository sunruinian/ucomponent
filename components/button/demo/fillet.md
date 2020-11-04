---
order: 3
title: 大圆角按钮（次按钮）
---

## zh-CN

用于卡片中，增加视觉舒适度。等级等同于次按钮

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <>
    <Button type="primary" shape="round">
      圆角按钮
    </Button>
    <Button type="default" shape="round">
      圆角按钮
    </Button>
  </>,
  mountNode,
);
```
