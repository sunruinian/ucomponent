---
order: 1
title:
  zh-CN: 文字标题
---

## zh-CN

展示不同级别的标题。

```jsx
import { Typography } from 'ucomponent';

const { Title } = Typography;

ReactDOM.render(
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>,
  mountNode,
);
```
