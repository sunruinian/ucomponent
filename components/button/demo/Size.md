---
order: 8
title: 按钮尺寸
---

## zh-CN

按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <>
    <Button size="large" type="primary">
      登陆
    </Button>
    <Button type="primary">登陆</Button>
    <Button type="primary">
      <b>加粗</b>
    </Button>
    <Button size="small" type="primary">
      登陆
    </Button>
  </>,
  mountNode,
);
```
