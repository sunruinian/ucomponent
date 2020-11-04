---
order: 2
title:
  zh-CN: 交互样式
---

## zh-CN

数字输入框。

## en-US

```jsx
import { InputNumber } from 'ucomponent';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <>
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    <br />
    <br />
    <InputNumber disabled min={1} max={10} defaultValue={3} onChange={onChange} />
  </>,
  mountNode,
);
```
