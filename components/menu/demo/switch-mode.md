---
order: 5
title:
  zh-CN: 切换菜单类型
---

## zh-CN

展示动态切换模式。

## en-US

```jsx
import { Menu } from 'ucomponent';
import { Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    return (
      <>
        <Switch onChange={this.changeMode} /> Change Mode
        <Divider type="vertical" />
        <Switch onChange={this.changeTheme} /> Change Style
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1" icon={<MailOutlined />}>
            导航菜单
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            导航菜单
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="导航菜单">
            <Menu.Item key="3">二级导航</Menu.Item>
            <Menu.Item key="4">二级导航</Menu.Item>
            <SubMenu key="sub1-2" title="二级导航">
              <Menu.Item key="5">三级导航</Menu.Item>
              <Menu.Item key="6">三级导航</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="导航菜单">
            <Menu.Item key="7">二级导航</Menu.Item>
            <Menu.Item key="8">二级导航</Menu.Item>
            <Menu.Item key="9">二级导航</Menu.Item>
            <Menu.Item key="10">二级导航</Menu.Item>
          </SubMenu>
          <Menu.Item key="link" icon={<LinkOutlined />}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              导航菜单
            </a>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
```
