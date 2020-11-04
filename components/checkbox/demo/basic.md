---
order: 0
title:
  zh-CN: 基本用法
---

## zh-CN

简单的 checkbox。

## en-US

```jsx
import { Checkbox } from 'ucomponent';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

ReactDOM.render(
  <>
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
    <br />
    <br />
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>,
  mountNode,
);
```
