---
order: 0
title:
  zh-CN: 横向步骤条
---

## zh-CN

基本用法 横向流程

## en-US

```jsx
import { Steps } from 'ucomponent';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={1}>
    <Step title="已完成" />
    <Step title="正在处理" />
    <Step title="待完成" />
  </Steps>,
  mountNode,
);
```
