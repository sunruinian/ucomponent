---
order: 3
title:
  zh-CN: 顶部-侧边布局-通栏
---

## zh-CN

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。

## en-US

```jsx
import { Layout, Menu, Breadcrumb } from 'ucomponent';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="一级菜单">
            <Menu.Item key="1">二级菜单</Menu.Item>
            <Menu.Item key="2">二级菜单</Menu.Item>
            <Menu.Item key="3">二级菜单</Menu.Item>
            <Menu.Item key="4">二级菜单</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="一级菜单">
            <Menu.Item key="5">二级菜单</Menu.Item>
            <Menu.Item key="6">二级菜单</Menu.Item>
            <Menu.Item key="7">二级菜单</Menu.Item>
            <Menu.Item key="8">二级菜单</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="一级菜单">
            <Menu.Item key="9">二级菜单</Menu.Item>
            <Menu.Item key="10">二级菜单</Menu.Item>
            <Menu.Item key="11">二级菜单</Menu.Item>
            <Menu.Item key="12">二级菜单</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>,
  mountNode,
);
```

```css
#components-layout-demo-top-side-2 .logo {
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

<style>
  #components-layout-demo-top-side-2 .logo {
    background: rgba(255, 255, 255, 0.3);
  }
</style>
