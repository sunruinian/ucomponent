---
order: 1
title:
  zh-CN: 尺寸规格
---

## zh-CN

大、默认、小

## en-US

```jsx
import { Input } from 'ucomponent';

ReactDOM.render(
  <>
    <Input size="large" placeholder="请输入" />
    <br />
    <br />
    <Input placeholder="请输入" />
    <br />
    <br />
    <Input size="small" placeholder="请输入" />
    <br />
    <br />
    <Input size="large" value="示例文字" placeholder="请输入" />
    <br />
    <br />
    <Input value="示例文字" placeholder="请输入" />
    <br />
    <br />
    <Input size="small" value="示例文字" placeholder="请输入" />
    <br />
    <br />
    <Input size="large" placeholder="请输入" disabled />
    <br />
    <br />
    <Input placeholder="请输入" disabled />
    <br />
    <br />
    <Input size="small" placeholder="请输入" disabled />
  </>,
  mountNode,
);
```
