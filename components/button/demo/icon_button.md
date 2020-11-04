---
order: 2
title: 图标按钮
---

## zh-CN

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）

## en-US

```jsx
import { Button } from 'ucomponent';
import { Tooltip } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

ReactDOM.render(
  <>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined style={{ color: '#fff' }} />}>
      搜索
    </Button>
    <Tooltip title="search">
      <Button
        shape="circle"
        className="shift"
        icon={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.85)' }} />}
      />
    </Tooltip>
    <Button
      type="default"
      className="shift"
      icon={<SearchOutlined style={{ color: 'rgba(0, 0, 0, 0.85)' }} />}
    >
      搜索
    </Button>
    <br />
    <Tooltip title="search">
      <Button
        type="dashed"
        shape="circle"
        icon={<SearchOutlined />}
        className="shift"
        style={{ color: 'rgba(0, 0, 0, 0.85)' }}
      />
    </Tooltip>
    <Button
      type="dashed"
      className="shift"
      icon={<PlusOutlined style={{ color: 'rgba(0, 0, 0, 0.85)' }} />}
    >
      搜素
    </Button>
  </>,
  mountNode,
);
```

```css
.shift:hover > span svg {
  color: #1890ff;
}
```
