---
order: 1
title:
  zh-CN: 尺寸大小
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
    <InputNumber size="large" min={1} max={10} defaultValue={3} onChange={onChange} />
    <br />
    <br />
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    <br />
    <br />
    <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={onChange} />
  </>,
  mountNode,
);
```
