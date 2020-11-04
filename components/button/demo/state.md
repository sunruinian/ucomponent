---
order: 6
title:
  zh-CN: 不可用状态
---

## zh-CN

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

```jsx
import { Button } from 'ucomponent';

ReactDOM.render(
  <>
    <Button type="primary">初级</Button>
    <Button type="primary" disabled>
      不可点击
    </Button>
    <br />
    <Button type="default">默认</Button>
    <Button disabled type="default">
      不可点击
    </Button>
    <br />
    <Button type="dashed">虚线</Button>
    <Button type="dashed" disabled>
      不可点击
    </Button>
    <br />
    <Button type="text">文字</Button>
    <Button type="text" disabled>
      不可点击
    </Button>
    <br />
    <Button type="link">链接</Button>
    <Button type="link" disabled>
      不可点击
    </Button>
    <br />
    <Button danger>默认危险</Button>
    <Button danger disabled>
      不可点击
    </Button>
    <br />
    <Button danger type="text">
      危险文字
    </Button>
    <Button danger type="text" disabled>
      不可点击
    </Button>
    <br />
    <Button type="link" danger>
      危险链接
    </Button>
    <Button type="link" danger disabled>
      不可点击
    </Button>
    <Button shape="round" type="default">
      圆角按钮
    </Button>
    <Button shape="round" type="default" disabled>
      圆角按钮
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button ghost>幽灵</Button>
      <Button ghost disabled>
        不可点击
      </Button>
    </div>
  </>,
  mountNode,
);
```

```css
.site-button-ghost-wrapper {
  padding: 8px 8px 0 8px;
  background: rgb(190, 200, 200);
}
```
