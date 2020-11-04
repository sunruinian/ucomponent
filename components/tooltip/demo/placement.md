---
order: 1
title:
  zh-CN: 位置
---

## zh-CN

位置有 12 个方向。

## en-US

```jsx
import { Tooltip, Button } from 'ucomponent';

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Tooltip placement="topLeft" title="上左">
        <Button>上左</Button>
      </Tooltip>
      <Tooltip placement="top" title="上边">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip placement="topRight" title="上右">
        <Button>上右</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Tooltip placement="leftTop" title="左上">
        <Button>左上</Button>
      </Tooltip>
      <Tooltip placement="left" title="左边">
        <Button>左边</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title="左下">
        <Button>左下</Button>
      </Tooltip>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Tooltip placement="rightTop" title="右上">
        <Button>右上</Button>
      </Tooltip>
      <Tooltip placement="right" title="右边">
        <Button>右边</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title="右下">
        <Button>右下</Button>
      </Tooltip>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Tooltip placement="bottomLeft" title="下左">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip placement="bottom" title="下边">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title="下右">
        <Button>下右</Button>
      </Tooltip>
    </div>
  </div>,
  mountNode,
);
```

<style>
.code-box-demo .demo {
  overflow: auto;
}
.code-box-demo .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.code-box-demo .ant-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
  margin-bottom: 8px;
}
#components-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
}
</style>
