---
order: 1
title:
  zh-CN: 按钮样式的单选组合
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。两种按钮样式可选。鼠标经过时，文字变为主色

## en-US

```jsx
import { Radio } from 'ucomponent';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Radio.Group defaultValue="a" size="large">
          <Radio.Button value="a">北京</Radio.Button>
          <Radio.Button value="b">天津</Radio.Button>
          <Radio.Button value="c">衡水</Radio.Button>
          <Radio.Button value="d">深州</Radio.Button>
        </Radio.Group>
        <br />
        <Radio.Group defaultValue="a" style={{ marginTop: 16 }}>
          <Radio.Button value="a">北京</Radio.Button>
          <Radio.Button value="b">天津</Radio.Button>
          <Radio.Button value="c">衡水</Radio.Button>
          <Radio.Button value="d">深州</Radio.Button>
        </Radio.Group>
        <br />
        <Radio.Group defaultValue="a" size="small" style={{ marginTop: 16 }}>
          <Radio.Button value="a">北京</Radio.Button>
          <Radio.Button value="b">天津</Radio.Button>
          <Radio.Button value="c">衡水</Radio.Button>
          <Radio.Button value="d">深州</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">北京</Radio.Button>
          <Radio.Button value="b">天津</Radio.Button>
          <Radio.Button value="c">衡水</Radio.Button>
          <Radio.Button value="d">深州</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <div>不可点击</div>
        <Radio.Group disabled defaultValue="a" style={{ marginTop: 16 }}>
          <Radio.Button value="a">北京</Radio.Button>
          <Radio.Button value="b">天津</Radio.Button>
          <Radio.Button value="c">衡水</Radio.Button>
          <Radio.Button value="d">深州</Radio.Button>
        </Radio.Group>
      </>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
