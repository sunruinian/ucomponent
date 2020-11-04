---
order: 99
title:
  zh-CN: Style debug
---

## zh-CN

buggy!

## en-US

```jsx
import { Menu } from 'ucomponent';
import { Switch } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="导航菜单">
            <Menu.Item key="1">二级导航</Menu.Item>
            <Menu.Item key="2">二级导航</Menu.Item>
            <Menu.Item key="3">二级导航</Menu.Item>
            <Menu.Item key="4">二级导航</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="导航菜单">
            <Menu.Item key="5">二级导航</Menu.Item>
            <Menu.Item key="6">二级导航</Menu.Item>
            <SubMenu key="sub3" title="二级导航">
              <Menu.Item key="7">三级导航</Menu.Item>
              <Menu.Item key="8">三级导航</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="11">导航菜单</Menu.Item>
          <Menu.Item key="12">导航菜单</Menu.Item>
        </Menu>
      </>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
```
