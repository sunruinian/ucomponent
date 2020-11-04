---
order: 3
title:
  zh-CN: 组合样式可用于验证码
---

## zh-CN

组合样式可用于验证码

## en-US

```jsx
import { Input, Col, Row } from 'ucomponent';

const App = () => (
  <div>
    <Input.Group size="large">
      <Row gutter={1}>
        <Col span={8}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
      </Row>
    </Input.Group>
    <br />
    <Input.Group>
      <Row gutter={1}>
        <Col span={8}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
        <Col span={8}>
          <Input defaultValue="12345" />
        </Col>
      </Row>
    </Input.Group>
  </div>
);

ReactDOM.render(<App />, mountNode);
```
