---
order: 9
title:
  zh-CN: 按钮组
---

## zh-CN

以按钮组的方式出现，常用于多项类似操作

## en-US

```jsx
import { Button, Radio } from 'ucomponent';
import {
  LeftOutlined,
  RightOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

ReactDOM.render(
  <>
    <Button.Group>
      <Button type="primary">按钮一</Button>
      <Button type="primary">按钮二</Button>
      <Button type="primary">按钮三</Button>
    </Button.Group>
    <br />
    <br />
    <Button.Group>
      <Button disabled>按钮一</Button>
      <Button disabled>按钮二</Button>
      <Button disabled>按钮三</Button>
    </Button.Group>
    <br />
    <br />
    <Button.Group>
      <Button type="primary">
        <LeftOutlined /> 按钮一
      </Button>
      <Button type="primary">
        按钮二 <RightOutlined />
      </Button>
    </Button.Group>
    <br />
    <br />
    <Button.Group>
      <Button type="primary">文字</Button>
      <Button type="primary">
        <CloudUploadOutlined />
      </Button>
      <Button type="primary">
        <DeleteOutlined />
      </Button>
    </Button.Group>
    <br />
    <br />
    <Button type="primary" icon={<ShareAltOutlined />} />
    <Button type="primary" shape="circle" icon={<ShareAltOutlined />} />
  </>,
  mountNode,
);
```
