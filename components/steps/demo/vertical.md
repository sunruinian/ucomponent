---
order: 2
title:
  zh-CN: 竖直方向的步骤条
---

## zh-CN

简单的竖直方向的步骤条。

## en-US

```jsx
import { Steps } from 'ucomponent';

const { Step } = Steps;

ReactDOM.render(
  <>
    <Steps direction="vertical" current={1}>
      <Step title="步骤一" />
      <Step title="步骤二" />
      <Step title="步骤三" />
    </Steps>
    <br />
    <Steps direction="vertical" size="small" current={1}>
      <Step title="步骤一" />
      <Step title="步骤二" />
      <Step title="步骤三" />
    </Steps>
    ,
  </>,
  mountNode,
);
```
