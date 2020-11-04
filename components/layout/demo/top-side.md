---
order: 2
title:
  zh-CN: 顶部-侧边布局
---

## zh-CN

拥有顶部导航及侧边栏的页面，多用于展示类网站。

## en-US

```jsx
import { Layout, Menu, Breadcrumb } from 'ucomponent';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">一级菜单</Menu.Item>
        <Menu.Item key="2">一级菜单</Menu.Item>
        <Menu.Item key="3">一级菜单</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="一级导航">
              <Menu.Item key="1">二级导航</Menu.Item>
              <Menu.Item key="2">二级导航</Menu.Item>
              <Menu.Item key="3">二级导航</Menu.Item>
              <Menu.Item key="4">二级导航</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="一级导航">
              <Menu.Item key="5">二级导航</Menu.Item>
              <Menu.Item key="6">二级导航</Menu.Item>
              <Menu.Item key="7">二级导航</Menu.Item>
              <Menu.Item key="8">二级导航</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="一级导航">
              <Menu.Item key="9">二级导航</Menu.Item>
              <Menu.Item key="10">二级导航</Menu.Item>
              <Menu.Item key="11">二级导航</Menu.Item>
              <Menu.Item key="12">二级导航</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>ucomponent ©2020 Created by Ant UED</Footer>
  </Layout>,
  mountNode,
);
```

```css
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.site-layout-background {
  background: #fff;
}
```
