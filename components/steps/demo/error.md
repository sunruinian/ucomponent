---
order: 6
title:
  zh-CN: 步骤运行错误
---

## zh-CN

使用 Steps 的 `status` 属性来指定当前步骤的状态。

## en-US

```jsx
import { Steps } from 'antd';

const { Step } = Steps;

ReactDOM.render(
  <Steps current={1} status="error">
    <Step title="步骤一" description="提示到了第一步" />
    <Step title="步骤二" description="提示到了第二步" />
    <Step title="步骤三" description="提示到了第三步" />
  </Steps>,
  mountNode,
);
```
