---
order: 0
title:
  zh-CN: 样式调整
---

## zh-CN

最简单的下拉菜单。

## en-US

```jsx
import { Menu, Dropdown, Button } from 'ucomponent';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item
      key="1"
      icon={
        <UserOutlined
          style={{ display: 'inline-block', verticalAlign: 'top', paddingTop: '5px' }}
        />
      }
    >
      1st menu item
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={
        <UserOutlined
          style={{ display: 'inline-block', verticalAlign: 'top', paddingTop: '5px' }}
        />
      }
    >
      2nd menu item
    </Menu.Item>
    <Menu.Item
      key="3"
      icon={
        <UserOutlined
          style={{ display: 'inline-block', verticalAlign: 'top', paddingTop: '5px' }}
        />
      }
    >
      3rd menu item
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div id="components-dropdown-demo-dropdown-button">
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        更多 <DownOutlined />
      </a>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button>
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button type="primary">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
  </div>,
  mountNode,
);
```

```css
#components-dropdown-demo-dropdown-button .ant-dropdown-trigger {
  margin: 0 20px 8px 0;
}

#components-dropdown-demo-dropdown-button .ant-btn-group-rtl.ant-dropdown-button {
  margin: 0 0 8px 8px;
}
```
