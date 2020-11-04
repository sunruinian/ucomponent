---
order: 1
title: 线型按钮（次按钮）
---

## zh-CN

描边按钮是中等强调按钮。 层级低于主按钮。它们包含重要但在应用程序中的不是主要的那些操作。

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <>
    <Button type="default">按 钮</Button>
    <Button type="primary" ghost>
      蓝色
    </Button>
    <Button type="dashed">虚框按钮</Button>
  </>,
  mountNode,
);
```
