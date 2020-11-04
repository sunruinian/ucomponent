---
order: 9
title:
  zh-CN: 搜索框
---

## zh-CN

带有搜索按钮的输入框

## en-US

```jsx
import { Input } from 'ucomponent';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

ReactDOM.render(
  <>
    <Search
      placeholder="请速入搜索"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search
      size="large"
      placeholder="请速入搜索"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search
      size="small"
      placeholder="请速入搜索"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search
      size="large"
      placeholder="请速入搜索"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br />
    <br />
    <Search placeholder="请速入搜索" onSearch={value => console.log(value)} enterButton />
    <br />
    <br />
    <Search
      size="small"
      placeholder="请速入搜索"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br />
    <br />
    <Search
      placeholder="请速入搜索"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
    <br />
    <br />
    <Search
      placeholder="请速入搜索"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={value => console.log(value)}
    />
  </>,
  mountNode,
);
```
