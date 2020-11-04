---
order: 1
title:
  zh-CN: 垂直菜单
---

## zh-CN

子菜单是弹出的形式。

## en-US

```jsx
import { Menu } from 'ucomponent';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}

ReactDOM.render(
  <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
    <SubMenu key="sub1" icon={<MailOutlined />} title="导航菜单">
      <Menu.ItemGroup title="二级菜单">
        <Menu.Item key="1">三级菜单</Menu.Item>
        <Menu.Item key="2">三级菜单</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="二级菜单">
        <Menu.Item key="3">三级菜单</Menu.Item>
        <Menu.Item key="4">三级菜单</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="导航菜单">
      <Menu.Item key="5">三级菜单</Menu.Item>
      <Menu.Item key="6">三级菜单</Menu.Item>
      <SubMenu key="sub3" title="三级菜单">
        <Menu.Item key="7">四级菜单</Menu.Item>
        <Menu.Item key="8">四级菜单</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" icon={<SettingOutlined />} title="导航菜单">
      <Menu.Item key="9">三级菜单</Menu.Item>
      <Menu.Item key="10">三级菜单</Menu.Item>
      <Menu.Item key="11">三级菜单</Menu.Item>
      <Menu.Item key="12">三级菜单</Menu.Item>
    </SubMenu>
  </Menu>,
  mountNode,
);
```
