---
order: 10
title:
  zh-CN: 多个按钮组合
---

## zh-CN

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 Dropdown.Button 中组合使用。

## en-US

```jsx
import { Button, Menu, Dropdown } from 'ucomponent';
import { DownOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <>
    <Button type="primary">主按钮</Button>
    <Button type="default">次按钮</Button>
    <Dropdown overlay={menu}>
      <Button type="default">
        更多操作 <DownOutlined style={{ color: 'rgba(0, 0, 0, 0.85)' }} />
      </Button>
    </Dropdown>
  </>,
  mountNode,
);
```
