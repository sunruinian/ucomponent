---
order: 0
title:
  zh-CN: 顶部导航
---

## zh-CN

水平的顶部导航菜单。

## en-US

```jsx
import { Menu } from 'ucomponent';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu icon={<SettingOutlined />} title="导航菜单">
          <Menu.ItemGroup title="二级导航">
            <Menu.Item key="setting:1">三级导航</Menu.Item>
            <Menu.Item key="setting:2">三级导航</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="二级导航">
            <Menu.Item key="setting:3">三级导航</Menu.Item>
            <Menu.Item key="setting:4">三级导航</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail" icon={<MailOutlined />}>
          导航菜单
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          导航菜单
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">
            导航菜单
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
