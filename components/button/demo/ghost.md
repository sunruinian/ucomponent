---
order: 4
title:
  zh-CN: 幽灵按钮
---

## zh-CN

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

## en-US

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <div className="site-button-ghost-wrapper">
    <Button ghost>按钮一</Button>
  </div>,
  mountNode,
);
```

```css
.site-button-ghost-wrapper {
  background: rgb(190, 200, 200);
  padding: 26px 16px 16px;
}
```
