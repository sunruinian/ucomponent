---
order: 1
title:
  zh-CN: 尺寸
---

## zh-CN

尺寸规则。

## en-US

```jsx
import { Menu, Dropdown, Button } from 'ucomponent';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu1 = (
  <Menu>
    <Menu.Item
      style={{ padding: '10px 16px' }}
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
      style={{ padding: '10px 16px' }}
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
      style={{ padding: '10px 16px' }}
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
    <Dropdown overlay={menu1}>
      <Button type="link" size="large">
        更多
        <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button type="link">
        更多
        <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button type="link" size="small">
        更多
        <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu1}>
      <Button size="large">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button>
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button size="small">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu1}>
      <Button type="primary" size="large">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button type="primary">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button type="primary" size="small">
        下拉菜单 <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown.Button overlay={menu1} size="large">
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button overlay={menu}>Dropdown</Dropdown.Button>
    <Dropdown.Button overlay={menu} size="small">
      Dropdown
    </Dropdown.Button>
  </div>,
  mountNode,
);
```

```css
#components-dropdown-demo-dropdown-button .ant-dropdown-trigger {
  margin: 0 20px 8px 0;
  display: block;
}

#components-dropdown-demo-dropdown-button .ant-btn-group-rtl.ant-dropdown-button {
  margin: 0 0 8px 8px;
}
```
