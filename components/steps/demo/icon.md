---
order: 4
title:
  zh-CN: 带图标的步骤条
---

## zh-CN

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

## en-US

```jsx
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

ReactDOM.render(
  <Steps>
    <Step status="finish" title="开始" icon={<UserOutlined />} />
    <Step status="finish" title="验证" icon={<SolutionOutlined />} />
    <Step status="process" title="支付" icon={<LoadingOutlined />} />
    <Step status="wait" title="完成" icon={<SmileOutlined />} />
  </Steps>,
  mountNode,
);
```
