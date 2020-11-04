---
order: 5
title:
  zh-CN: 带有文本描述的步骤条
---

## zh-CN

带有文本描述的步骤条

## en-US

```jsx
import { Steps } from 'ucomponent';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={1}>
    <Step title="步骤一" description="这是第一个提示" />
    <Step title="步骤二" description="这是第二个提示" />
    <Step title="步骤三" description="这是第三个提示" />
  </Steps>,
  mountNode,
);
```
